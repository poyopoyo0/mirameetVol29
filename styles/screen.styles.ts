import { css, keyframes } from "@emotion/react"

const blink = keyframes({
  '0%': {
    opacity: '0',
  },
  '100%': {
    opacity: '1',
  }
})

export const screen = {
  startScreen: css({
    position: 'absolute',
    left: '0',
    right: '0',
    margin: 'auto',
    zIndex: 101,
    width: '225px',
    height: '205px',
    background: '#061A1B',
  }),
  screenHeader: css({
    background: '#E3FED1',
    width: 'calc(100% - 6px)',
    height: '60px',
    margin: '10px auto 0',
    border: '1px solid #E3FED1',
  }),
  screenHeaderInner: css({
    borderTop: '4px solid #C9E1B9',
    borderRight: '4px solid #C9E1B9',
    borderBottom: '4px solid #061A1B',
    borderLeft: '4px solid #C9E1B9',
    // height: 'calc(100% - 8px)',
    height: '100%',
    'h1': {
      textAlign: 'center',
      marginTop: '-2px',
      fontSize: '40px',
    },
    'small': {
      position: 'absolute',
      right: '11px',
      top: '20px',
      fontSize: '10px',
    }
  }),
  screenHeaderTitle: css({
    border: '2px solid #97A98B',
    height: 'calc(100% - 4px)',
  }),
  screenMoskva: css({
    width: 'calc(100% - 18px)',
    height: '70px',
    background: '#B0C5A2',
    margin: '0 auto 0',
    borderTop: '2px solid #B0C5A2',
    position: 'relative',
    '&::before': {
      content: "''",
      width: '100%',
      background: '#7E8D74',
      height: '2px',
      display: 'block',
      position: 'absolute',
      left: '0',
      top: '0',
    },
    '&::after': {
      content: "''",
      width: '100%',
      background: '#061A1B',
      height: '2px',
      display: 'block',
      position: 'absolute',
      left: '0',
      top: '2px',
    },
  }),
  screenMoskvaMoon: css({
    transform: 'scale(0.5)',
    position: 'absolute',
    top: '15px',
    left: '35px',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: '-6px',
      left: '-6px',
      width: '6px',
      height: '6px',
      background: 'transparent',
      boxShadow: '6px 6px 0 transparent, 12px 6px 0 transparent, 18px 6px 0 transparent, 24px 6px 0 transparent, 30px 6px 0 #c9e1b9, 36px 6px 0 #c9e1b9, 42px 6px 0 transparent, 48px 6px 0 transparent, 54px 6px 0 transparent, 60px 6px 0 transparent, 6px 12px 0 transparent, 12px 12px 0 transparent, 18px 12px 0 #c9e1b9, 24px 12px 0 #c9e1b9, 30px 12px 0 #c9e1b9, 36px 12px 0 #c9e1b9, 42px 12px 0 #c9e1b9, 48px 12px 0 #c9e1b9, 54px 12px 0 transparent, 60px 12px 0 transparent, 6px 18px 0 transparent, 12px 18px 0 #c9e1b9, 18px 18px 0 #c9e1b9, 24px 18px 0 #c9e1b9, 30px 18px 0 #c9e1b9, 36px 18px 0 #c9e1b9, 42px 18px 0 #c9e1b9, 48px 18px 0 #c9e1b9, 54px 18px 0 #c9e1b9, 60px 18px 0 transparent, 6px 24px 0 #c9e1b9, 12px 24px 0 #c9e1b9, 18px 24px 0 #c9e1b9, 24px 24px 0 #c9e1b9, 30px 24px 0 #c9e1b9, 36px 24px 0 #c9e1b9, 42px 24px 0 #c9e1b9, 48px 24px 0 #c9e1b9, 54px 24px 0 #c9e1b9, 60px 24px 0 #c9e1b9, 6px 30px 0 #c9e1b9, 12px 30px 0 #c9e1b9, 18px 30px 0 #c9e1b9, 24px 30px 0 #c9e1b9, 30px 30px 0 #c9e1b9, 36px 30px 0 #c9e1b9, 42px 30px 0 #c9e1b9, 48px 30px 0 #c9e1b9, 54px 30px 0 #c9e1b9, 60px 30px 0 #c9e1b9, 6px 36px 0 #c9e1b9, 12px 36px 0 #c9e1b9, 18px 36px 0 #c9e1b9, 24px 36px 0 #c9e1b9, 30px 36px 0 #c9e1b9, 36px 36px 0 #c9e1b9, 42px 36px 0 #c9e1b9, 48px 36px 0 #c9e1b9, 54px 36px 0 #c9e1b9, 60px 36px 0 #c9e1b9, 6px 42px 0 #c9e1b9, 12px 42px 0 #c9e1b9, 18px 42px 0 #c9e1b9, 24px 42px 0 #c9e1b9, 30px 42px 0 #c9e1b9, 36px 42px 0 #c9e1b9, 42px 42px 0 #c9e1b9, 48px 42px 0 #c9e1b9, 54px 42px 0 #c9e1b9, 60px 42px 0 #c9e1b9, 6px 48px 0 transparent, 12px 48px 0 #c9e1b9, 18px 48px 0 #c9e1b9, 24px 48px 0 #c9e1b9, 30px 48px 0 #c9e1b9, 36px 48px 0 #c9e1b9, 42px 48px 0 #c9e1b9, 48px 48px 0 #c9e1b9, 54px 48px 0 #c9e1b9, 60px 48px 0 transparent, 6px 54px 0 transparent, 12px 54px 0 transparent, 18px 54px 0 #c9e1b9, 24px 54px 0 #c9e1b9, 30px 54px 0 #c9e1b9, 36px 54px 0 #c9e1b9, 42px 54px 0 #c9e1b9, 48px 54px 0 #c9e1b9, 54px 54px 0 transparent, 60px 54px 0 transparent, 6px 60px 0 transparent, 12px 60px 0 transparent, 18px 60px 0 transparent, 24px 60px 0 transparent, 30px 60px 0 #c9e1b9, 36px 60px 0 #c9e1b9, 42px 60px 0 transparent, 48px 60px 0 transparent, 54px 60px 0 transparent, 60px 60px 0 transparent'
    }
  }),
  screenMoskvaCastle: css({
    transform: 'scale(0.47)',
    position: 'absolute',
    right: '90px',
    top: '4px',
    '&::before': css({
      content: "''",
      position: 'absolute',
      top: '-10px',
      left: '-10px',
      width: '10px',
      height: '10px',
      background: 'transparent',
      boxShadow: '10px 10px 0 transparent, 20px 10px 0 transparent, 30px 10px 0 transparent, 40px 10px 0 transparent, 50px 10px 0 transparent, 60px 10px 0 transparent, 70px 10px 0 #32382e, 80px 10px 0 #32382e, 90px 10px 0 transparent, 100px 10px 0 transparent, 110px 10px 0 transparent, 120px 10px 0 transparent, 130px 10px 0 transparent, 140px 10px 0 transparent, 10px 20px 0 transparent, 20px 20px 0 transparent, 30px 20px 0 transparent, 40px 20px 0 transparent, 50px 20px 0 transparent, 60px 20px 0 #32382e, 70px 20px 0 #c9e1b9, 80px 20px 0 #c9e1b9, 90px 20px 0 #32382e, 100px 20px 0 transparent, 110px 20px 0 transparent, 120px 20px 0 transparent, 130px 20px 0 transparent, 140px 20px 0 transparent, 10px 30px 0 transparent, 20px 30px 0 transparent, 30px 30px 0 transparent, 40px 30px 0 transparent, 50px 30px 0 transparent, 60px 30px 0 transparent, 70px 30px 0 #32382e, 80px 30px 0 #32382e, 90px 30px 0 transparent, 100px 30px 0 transparent, 110px 30px 0 transparent, 120px 30px 0 transparent, 130px 30px 0 transparent, 140px 30px 0 transparent, 10px 40px 0 transparent, 20px 40px 0 transparent, 30px 40px 0 transparent, 40px 40px 0 transparent, 50px 40px 0 transparent, 60px 40px 0 transparent, 70px 40px 0 #32382e, 80px 40px 0 #32382e, 90px 40px 0 transparent, 100px 40px 0 transparent, 110px 40px 0 transparent, 120px 40px 0 transparent, 130px 40px 0 transparent, 140px 40px 0 transparent, 10px 50px 0 transparent, 20px 50px 0 transparent, 30px 50px 0 transparent, 40px 50px 0 transparent, 50px 50px 0 transparent, 60px 50px 0 #32382e, 70px 50px 0 #32382e, 80px 50px 0 #32382e, 90px 50px 0 #32382e, 100px 50px 0 transparent, 110px 50px 0 transparent, 120px 50px 0 transparent, 130px 50px 0 transparent, 140px 50px 0 transparent, 10px 60px 0 transparent, 20px 60px 0 transparent, 30px 60px 0 transparent, 40px 60px 0 transparent, 50px 60px 0 #32382e, 60px 60px 0 #7e8d74, 70px 60px 0 #c9e1b9, 80px 60px 0 #7e8d74, 90px 60px 0 #c9e1b9, 100px 60px 0 #32382e, 110px 60px 0 transparent, 120px 60px 0 transparent, 130px 60px 0 transparent, 140px 60px 0 transparent, 10px 70px 0 transparent, 20px 70px 0 transparent, 30px 70px 0 transparent, 40px 70px 0 #32382e, 50px 70px 0 #c9e1b9, 60px 70px 0 #7e8d74, 70px 70px 0 #c9e1b9, 80px 70px 0 #7e8d74, 90px 70px 0 #c9e1b9, 100px 70px 0 #7e8d74, 110px 70px 0 #32382e, 120px 70px 0 transparent, 130px 70px 0 transparent, 140px 70px 0 transparent, 10px 80px 0 transparent, 20px 80px 0 transparent, 30px 80px 0 #32382e, 40px 80px 0 #c9e1b9, 50px 80px 0 #7e8d74, 60px 80px 0 #c9e1b9, 70px 80px 0 #7e8d74, 80px 80px 0 #c9e1b9, 90px 80px 0 #7e8d74, 100px 80px 0 #c9e1b9, 110px 80px 0 #c9e1b9, 120px 80px 0 #32382e, 130px 80px 0 transparent, 140px 80px 0 transparent, 10px 90px 0 transparent, 20px 90px 0 #32382e, 30px 90px 0 #c9e1b9, 40px 90px 0 #7e8d74, 50px 90px 0 #c9e1b9, 60px 90px 0 #7e8d74, 70px 90px 0 #c9e1b9, 80px 90px 0 #7e8d74, 90px 90px 0 #c9e1b9, 100px 90px 0 #c9e1b9, 110px 90px 0 #7e8d74, 120px 90px 0 #c9e1b9, 130px 90px 0 #32382e, 140px 90px 0 transparent, 10px 100px 0 #32382e, 20px 100px 0 #c9e1b9, 30px 100px 0 #c9e1b9, 40px 100px 0 #7e8d74, 50px 100px 0 #c9e1b9, 60px 100px 0 #7e8d74, 70px 100px 0 #c9e1b9, 80px 100px 0 #7e8d74, 90px 100px 0 #c9e1b9, 100px 100px 0 #7e8d74, 110px 100px 0 #c9e1b9, 120px 100px 0 #c9e1b9, 130px 100px 0 #c9e1b9, 140px 100px 0 #32382e, 10px 110px 0 #32382e, 20px 110px 0 #c9e1b9, 30px 110px 0 #c9e1b9, 40px 110px 0 #7e8d74, 50px 110px 0 #c9e1b9, 60px 110px 0 #7e8d74, 70px 110px 0 #c9e1b9, 80px 110px 0 #7e8d74, 90px 110px 0 #c9e1b9, 100px 110px 0 #7e8d74, 110px 110px 0 #c9e1b9, 120px 110px 0 #c9e1b9, 130px 110px 0 #c9e1b9, 140px 110px 0 #32382e, 10px 120px 0 transparent, 20px 120px 0 #32382e, 30px 120px 0 #c9e1b9, 40px 120px 0 #c9e1b9, 50px 120px 0 #7e8d74, 60px 120px 0 #c9e1b9, 70px 120px 0 #7e8d74, 80px 120px 0 #c9e1b9, 90px 120px 0 #7e8d74, 100px 120px 0 #c9e1b9, 110px 120px 0 #7e8d74, 120px 120px 0 #c9e1b9, 130px 120px 0 #32382e, 140px 120px 0 transparent, 10px 130px 0 transparent, 20px 130px 0 transparent, 30px 130px 0 #32382e, 40px 130px 0 #c9e1b9, 50px 130px 0 #c9e1b9, 60px 130px 0 #7e8d74, 70px 130px 0 #c9e1b9, 80px 130px 0 #7e8d74, 90px 130px 0 #c9e1b9, 100px 130px 0 #7e8d74, 110px 130px 0 #c9e1b9, 120px 130px 0 #32382e, 130px 130px 0 transparent, 140px 130px 0 transparent, 10px 140px 0 transparent, 20px 140px 0 transparent, 30px 140px 0 transparent, 40px 140px 0 #32382e, 50px 140px 0 #32382e, 60px 140px 0 #32382e, 70px 140px 0 #32382e, 80px 140px 0 #32382e, 90px 140px 0 #32382e, 100px 140px 0 #32382e, 110px 140px 0 #32382e, 120px 140px 0 transparent, 130px 140px 0 transparent, 140px 140px 0 transparent',
    })
  }),
  screenMoskvaInner: css({
    '&::before': {
      content: "''",
      width: '100%',
      background: '#C9E1B9',
      height: '2px',
      display: 'block',
      position: 'absolute',
      left: '0',
      top: '4px',
    },
    '&::after': {
      content: "''",
      width: '100%',
      background: '#7E8D74',
      height: '2px',
      display: 'block',
      position: 'absolute',
      left: '0',
      top: '6px',
    },
  }),
  screenBottom: css({
    background: '#E3FED1',
    height: '54px',
    width: 'calc(100% - 6px)',
    margin: '3px auto',
    paddingTop: '9px',
    'p': {
      textAlign: 'center',
      fontSize: '12px',
      animation: `${blink} 1.5s ease-inOut infinite alternate`,
    }
  }),
}
