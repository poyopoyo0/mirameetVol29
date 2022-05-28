/**
   * Tetris
*/


/**
 * 定数
 */

// ステージ
/** 1ブロックのサイズ */
const BLOCK_SIZE = 9
/** ステージの高さ（20ライン分ー時として使用し、上下1ラインは当たり判定とブロックコピー用に使用） */
const BLOCK_RAWS = 22
/** ステージの幅 */
const BLOCK_COLS = 12
/** キャンパスの幅 */
const SCREEN_WIDTH = BLOCK_SIZE * BLOCK_COLS
/** キャンパスの高さ */
const SCREEN_HEIGHT = BLOCK_SIZE * BLOCK_RAWS

// ゲームの状態
/** ゲーム中 */
const GAME = 1
/** ゲームオーバー時 */
const GAMEOVER = 0
/** ブロックを消す時のエフェクトモード */
const EFFECT = 2

// ブロックの状態
/** ブロックが存在しない */
const NON_BLOCK = 0
/** 通常のブロック（動かせる） */
const NORMAL_BLOCK = 1
/** ロックした（動かせない）ブロック */
const LOCK_BLOCK = 2
/** 消去するブロック（1ライン揃った時） */
const CLEAR_BLOCK = 3
/** 壁 */
const WALL = 9
/** ブロックの種類の数 */
const BLOCK_TYPE_NUMBER = 8

// エフェクト
/** エフェクト時のチカチカする回数 */
const EFFECT_ANIMATION = 2

// 色
/** 背景色 */
const BACK_COLOR = '#E3FFCF'
/** ゲームオーバー時のブロックの色 */
const GAMEOVER_COLOR = '#64705C'
/** 操作ブロックの色 */
const BLOCK_COLOR = '#8EC778'
/** ロックしたブロックの色 */
const LOCK_COLOR = '#3F7D30'
/** 壁の色 */
const WALL_COLOR = '#001E0F'
/** エラーブロックの色 */
const ERROR_COLOR = 'tomato'
/** エフェクト時の色1 */
const EFFECT_COLOR1 = 'whitesmoke'
/** エフェクト時の色2 */
const EFFECT_COLOR2 = '#000'

// ゲーム要素
/** 次のレベルまでの消去ライン */
const NEXTLEVEL = 10

/**
 * グローバル変数
 */

/** キャンパス取得 */
let canvas = null 
/** コンテキスト取得 */
let g = null
/** ゲームのステージ枠（壁の情報のみ、変化しない） */
let stage = new Array(BLOCK_COLS)
/** ゲーム中のステージ枠とブロック表示用（変化する） */ 
let field = new Array(BLOCK_COLS)
/** ブロックサイズ */
let bs
/** 落下速度 */
let speed
/** ゲームフレーム番号 */
let frame
/** 落ちてくるブロックの種類（7種類） */
let block = new Array()
/** 操作中のブロック */
let oBlock = new Array()
/** ブロックの種類番号 */
let blockType
/** ブロックの現在位置 */
let x, y
/** ブロックの元位置 */
let sx, sy
/** ゲームの状態 */
let mode
/** ゲームループ用のタイマー */
let timer1
/** 描画書き換え速度 */
let FPS
/** 消去したライン数 */
let clearLine

/** エフェクト時（色の斑点、エフェクトスピード、エフェクト回数） */
let effectState = {flipFlop: 0, speed: 0, count: 0}

/**
 * 初期化
 */
const init = () => {
  clearTimeout(timer1)
  FPS = 30
  clearLine = 0

  // キャンパス設定
  canvas = document.getElementById('canvas')
  canvas.width = SCREEN_WIDTH
  canvas.height = SCREEN_HEIGHT
  g = canvas.getContext('2d')

  // エフェクト設定
  effectState.flipFlop = 0
  effectState.speed = 4
  effectState.count = 0

  // ブロックの設定
  bs = BLOCK_SIZE

  // ブロックを設定
  block =  [[ [0, 0, 0, 0],
              [0, 1, 1, 0],
              [0, 1, 1, 0],
              [0, 0, 0, 0]],

            [ [0, 1, 0, 0],
              [0, 1, 0, 0],
              [0, 1, 0, 0],
              [0, 1, 0, 0]],

            [ [0, 0, 1, 0],
              [0, 1, 1, 0],
              [0, 1, 0, 0],
              [0, 0, 0, 0]],

            [ [0, 1, 0, 0],
              [0, 1, 1, 0],
              [0, 0, 1, 0],
              [0, 0, 0, 0]],

            [ [0, 0, 0, 0],
              [0, 1, 1, 0],
              [0, 1, 0, 0],
              [0, 1, 0, 0]],

            [ [0, 0, 0, 0],
              [0, 1, 1, 0],
              [0, 0, 1, 0],
              [0, 0, 1, 0]],

            [ [0, 0, 0, 0],
              [0, 1, 0, 0],
              [1, 1, 1, 0],
              [0, 0, 0, 0]],

            [ [1, 0, 0, 0],
              [0, 1, 0, 0],
              [0, 0, 1, 0],
              [0, 0, 0, 1]],
          ]
  
  //ステージを設定
  stage = [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // ←表示しない
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
          [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]  // ←表示しない
}

/**
 * ステージ設定
 */
const setStage = () => {
  // 表示するための配列
  for(let i = 0; i < BLOCK_RAWS; i++) {
    field[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
  // 操作ブロックのための配列
  oBlock = [  [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0]
          ]
  // ステージデータをコピーする
  for (let i = 0; i < BLOCK_RAWS; i++) {
    for (let j = 0; j < BLOCK_COLS; j++) {
      field[i][j] = stage[i][j]
    }
  }
}

/**
 * ゲーム開始処理
 */
const newGame = () => {
  setStage()
  mode = GAME
  frame = 1
  speed = 30
  clearTimeout(timer1)
  createBlock()
  mainLoop()
}

/**
 * 新しいブロックを作成
 */
const createBlock = () => {
  if (mode == EFFECT) return
  x = sx = Math.floor(BLOCK_COLS / 3);
  y = sy = 0;
  blockType = Math.floor(Math.random() * BLOCK_TYPE_NUMBER);
  // ブロックをコピー
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      oBlock[i][j] = block[blockType][i][j]
    }
  }
  if (hitCheck()) {
    mode = GAMEOVER
    console.log('GAMEOVER!')
  }
  putBlock()
}

/**
 * ブロックをロック（動かせないように）する
 */
const lockBlock = () => {
  if (mode == EFFECT) return
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (oBlock[i][j]) field[i + y][j + x] = LOCK_BLOCK
    }
  }
}

/**
 * ブロックをステージにセットする
 */
const putBlock = () => {
  if (mode == EFFECT) return
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (oBlock[i][j]) field[i + y][j + x] = oBlock[i][j]
    }
  }
}

/**
 * ブロックを消去する
 */
const clearBlock = () => {
  if (mode == EFFECT) return
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (oBlock[i][j]) field[i + y][j + x] = NON_BLOCK
    }
  }
}

/**
 * ブロックの回転数
 */
const rotateBlock = () => {
  if (mode == EFFECT) return
  clearBlock()
  // 開店ブロック退避の配列
  let tBlock =  [ [0, 0, 0, 0],
                  [0, 0, 0, 0],
                  [0, 0, 0, 0],
                  [0, 0, 0, 0]
                ]
  // ブロックを退避
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      tBlock[i][j] = oBlock[i][j]
    }
  }
  // ブロックを回転
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      oBlock[i][j] = tBlock[3 - j][i]
    }
  }
  if (hitCheck()) {
    // 元に戻す
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        oBlock[i][j] = tBlock[i][j]
      }
    }
  }
  putBlock()
  return 0
}

/**
 * ブロックの当たり判定処理（移動できるか？落下できるか？）
 */
const hitCheck = () => {
  if (mode == EFFECT) return
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (field[i + y][j + x] && oBlock[i][j]) return 1
    }
  }
  return 0
}

/**
 * ラインが揃ったかチェックする
 */
const lineCheck = () => {
  if (mode == EFFECT) return
  let count
  let lineCount = 0  // 何ライン揃ったか？
  for (let i = 1; i < BLOCK_RAWS - 2; i++) {
    count = 0 // １ラインに揃ったブロックの数
    for (let j = 0; j < BLOCK_COLS; j++) { // 右端からチェック
      if (field[i][j]) count ++
      else break
    }
    if (count >= BLOCK_COLS) { // １ライン揃った
      lineCount ++
      clearLine ++
      for (let j = 1; j < BLOCK_COLS - 1; j++) field[i][j] = CLEAR_BLOCK // 消去ブロック
      console.log('lineCount = ' + lineCount)
      console.log('clearLine = ' + clearLine)
    }
  }
  return lineCount // 消去ライン数を返す（現在、この戻り値は未使用）
}

/**
 * 揃ったラインを消去する
 */
const deleteLine = () => {
  if (mode == EFFECT) return
  for (let i = BLOCK_RAWS - 1; i >= 1; i--) { // 下のラインから消去する
    for (let j = 1; j < BLOCK_COLS - 1; j++) { // 右端からチェック
      if (field[i][j] == CLEAR_BLOCK) {
        field[i][j] = field[i - 1][j] // 一段落とす
        for (let above = i - 1; above >= 1; above--) { // そこからまた上を一段ずつ落としていく
          field[above][j] = field[above - 1][j]
        }
        i++ // 落としたラインもまた、消去ラインだった時の対処
      }
    }
  }
}

/**
 * ゲーム画面クリア
 */
const clearWindow = () => {
  g.fillStyle = BACK_COLOR
  g.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)
}

/**
 * 描写処理
 */
const draw = () => {
  clearWindow()
  for (let i = 0; i < BLOCK_RAWS; i++) {
    for (let j = 0; j < BLOCK_COLS; j++) {
      switch(field[i][j]) {
        case NON_BLOCK: // 何もない
          g.fillStyle = BACK_COLOR
          break
        case NORMAL_BLOCK: // ブロック
          g.fillStyle = BLOCK_COLOR
          break
        case LOCK_BLOCK: // ブロック(ロック)
          g.fillStyle = LOCK_COLOR
          break
        case CLEAR_BLOCK: // 消去ブロック
          g.fillStyle = BLOCK_COLOR
          break
        case WALL: // 壁
          g.fillStyle = WALL_COLOR
          break
        default: // 重なったときの色
          g.fillStyle = ERROR_COLOR
      }
      g.fillRect(j * bs, i * bs, bs - 1, bs - 1) // 1引いているのはブロック同士の隙間を入れるため
    }
  }
}

/**
 * ラインを消去するときのエフェクト
 */
const effect = () => {
  let color = [ EFFECT_COLOR1, EFFECT_COLOR2 ]
  
  g.fillStyle = color[effectState.flipFlop]
  for (let i = 0; i < BLOCK_RAWS; i++) {
    for (let j = 0; j < BLOCK_COLS; j++) {
      if (field[i][j] == CLEAR_BLOCK) { // 消去ブロックならエフェクト表示
        g.fillRect(j * bs, i * bs, bs - 1, bs - 1)
      }
    }
  }
  effectState.flipFlop = 1 - effectState.flipFlop // エフェクト色を交互に切り替え

  if (effectState.count > EFFECT_ANIMATION) {
    mode = GAME
    effectState.count = 0
    effectState.flipFlop = 0
    deleteLine()
    createBlock()
  }
  effectState.count ++
}

/**
 * ゲームオーバー処理
 */
const gameOver = () => {
  for (let i = 0; i < BLOCK_RAWS; i++) {
    for (let j = 0; j < BLOCK_COLS; j++) {
      if (field[i][j] && field[i][j] != WALL) { // ブロックのみ色を変える
        g.fillStyle = GAMEOVER_COLOR
        g.fillRect(j * bs, i * bs, bs - 1, bs - 1)
      }
    }
  }
}

/**
 * ゲームメイン
 */
const mainLoop = () => {
  if (mode == GAME) {
    sx = x; sy = y;
    if (frame % speed == 0) {
      clearBlock()
      y++
      if (hitCheck()) {
        y = sy
        lockBlock()
        if (lineCheck() > 0) {
          mode = EFFECT
        }
        createBlock()
      }
      putBlock()
    }
    draw()
  }
  else if (mode == GAMEOVER) {
    gameOver()
  }
  else if (mode == EFFECT) {
    if (frame % effectState.speed == 0) {
      effect()
    }
  }
  frame++
  // 落下スピード
  if (clearLine >= NEXTLEVEL) {
    clearLine = 0
    speed--
    console.log('speedUP! :' + speed)
  }
  if (speed < 1) speed = 1
  timer1 = setTimeout(mainLoop, 1000 / FPS)
}

/**
 * 操作
 */
const keyDownFunc = e => {
  if (mode == EFFECT) return
  if (mode == GAME) {
    clearBlock()
    sx = x
    sy = y
    if (e.keyCode == 32) {
      rotateBlock()
    }
    else if (e.keyCode == 37) {
      x--
    }
    else if (e.keyCode == 39) {
      x++
    }
    else if (e.keyCode == 40) {
      y++
    }
    if (hitCheck()) {
      x = sx
      y = sy
    }
    putBlock()
  }
  else if (mode == GAMEOVER) {
    if (e.keyCode == 13) {
      newGame()
    }
  }
}

/**
 * ENTERキーでゲーム開始
 */
const gameStart = e => {
  const startScreen = document.getElementById('startScreen')
  if (e.keyCode == 13) {
    if (startScreen != null) {
      startScreen.remove()
    }
    newGame()
    return false
  }
}

export {keyDownFunc, gameStart, init}