import { common } from '../styles/common.styles'
import { screen } from '../styles/screen.styles'
import { gameboy, font } from '../styles/gameboy.styles'
import { css, Global } from '@emotion/react'
import { useEffect } from 'react'
import { init, keyDownFunc, gameStart } from '../utils/tetris'

export default function Home() {
  /**
   * 起動処理
   */
  useEffect(() => {
    // 初期化
    init()
    // キーボードイベント設定
    document.addEventListener('keydown', keyDownFunc, false)
    // ゲーム開始
    document.addEventListener('keydown', gameStart, false)
  },[])

  return (
    <>
      <Global styles={font} />
      <div css={[common.wrapper, font]}>
        <canvas id='canvas' css={common.canvas}></canvas>
        <div css={gameboy.gameboy}>
          <div css={gameboy.screenCont}>
            <div css={gameboy.screenContPower}></div>
            <div css={gameboy.screen}>
              <div id='startScreen' css={screen.startScreen}>
                <div css={screen.screenHeader}>
                  <div css={screen.screenHeaderInner}>
                    <div css={screen.screenHeaderTitle}>
                      <h1>TETRIS</h1>
                      <small>TH</small>
                    </div>
                  </div>
                </div>
                <div css={screen.screenMoskva}>
                  <div css={screen.screenMoskvaInner}>
                    <div css={screen.screenMoskvaMoon}></div>
                    <div css={screen.screenMoskvaCastle}></div>
                  </div>
                </div>
                <div css={screen.screenBottom}>
                  <p>PRESS  "ENTER"  START</p>
                </div>
              </div>
              <div css={gameboy.screenHeader}>DOT MATRIX WITH STEREO SOUND</div>
              <div css={gameboy.animatedText}>
                Nintendo
                <div css={gameboy.animatedTextCopy}>®</div>
              </div>
            </div>
          </div>
          <div css={gameboy.controlsCont}>
            <div css={gameboy.btnDirection}>
              <div className='vertical'></div>
              <div className='horizontal'></div>
            </div>
            <div css={gameboy.btnAB}></div>
            <div css={gameboy.btnStartSelect}></div>
          </div>
          <div css={gameboy.speakers}></div>
          <div css={gameboy.onOff}>&lt; off-on &gt;</div>
          <div css={gameboy.phones}>phones</div>
        </div>
      </div>
    </>
  )
}
