// @font-face {
//   fontFamily: 'Pretendo';
//   src: url("../public/font/Pretendo.ttf") format("truetype"), url("../public/font/Pretendo.woff") format("woff"), url("../public/font/Pretendo.woff2") format("woff2");
//   font-weight: normal;
//   font-style: normal;
// }

import { css } from "@emotion/react";

/* body {
  background: #09cbe4;
  fontFamily: 'Pretendo';
} */

export const font = css`
@font-face {
  font-family: 'Pretendo';
  src: url("/font/Pretendo.ttf") format("truetype"), url("/font/Pretendo.woff") format("woff"), url("/font/Pretendo.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}
`

export const gameboy = {
  btnOn: css({
    '&btnOff': {
      display: 'block',
      margin: '0 auto',
      fontFamily: 'sans-serif',
      textAlign: 'center',
    }
  }),
  btnHide: css({
    display: 'none',
  }),
  gameboy: css({
    position: 'relative',
    display: 'block',
    margin: '20px auto',
    width: '422px',
    height: '697px',
    background: '#eee',
    borderRadius: '10px 10px 60px 10px',
    boxShadow: '5px 5px rgba(0, 0, 0, 0.1)',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '31px',
      borderBottom: '4px solid #e0e0e0',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '0',
      width: '334px',
      height: '31px',
      borderLeft: '4px solid #e0e0e0',
      borderRight: '4px solid #e0e0e0',
      marginLeft: '40px',
      marginRight: '40px',
    }
  }),
  screenCont: css({
    position: 'relative',
    top: '60px',
    left: '40px',
    width: '342px',
    height: '272px',
    marginBottom: '58px',
    backgroundColor: '#777',
    borderRadius: '13px 13px 50px 13px',
  }),
  screen: css({
    position: 'relative',
    top: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: '#E3FED1',
    width: '225px',
    height: '205px',
    boxShadow: 'inset 3px 3px rgba(0, 0, 0, 0.15)',
    '&:before': {
      content: "''",
      width: '220px',
      height: '9px',
      background: '#E3FED1',
      position: 'absolute',
      left: '3px',
      top: '3px',
      right: '60px',
      margin: 'auto',
      zIndex: '100',
    },
    '&:after': {
      content: "''",
      width: '220px',
      height: '12px',
      background: '#E3FED1',
      position: 'absolute',
      left: '3px',
      bottom: '2px',
      right: '60px',
      margin: 'auto',
      zIndex: '100',
    },
  }),
  screenHeader: css({
    position: 'relative',
    top: '-30px',
    width: '100%',
    height: '30px',
    paddingTop: '10px',
    boxSizing: 'border-box',
    textAlign: 'right',
    fontSize: '10px',
    fontFamily: 'sans-serif',
    color: '#b3b3b3',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '-43px',
      top: '12px',
      width: '80px',
      height: '3px',
      backgroundColor: '#8b1d90',
      boxShadow: '0 6px 0 #283593',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      right: '-46px',
      top: '12px',
      width: '38px',
      height: '3px',
      backgroundColor: '#8b1d90',
      boxShadow: '0 6px 0 #283593',
    }
  }),
  animatedText: css({
    opacity: '0',
    display: 'inline',
    position: 'relative',
    top: '-26px',
    left: '30%',
    color: '#8a891f',
    fontSize: '17px',
    fontFamily: '"Pretendo"',
    zIndex: '10',
  }),
  animatedTextEnd: css({
    opacity: '1',
    top: '50px',
    transition: 'top 3s linear',
  }),
  animatedTextCopy: css({
    position: 'relative',
    display: 'inline',
    top: '-2px',
    marginLeft: '2px',
    fontSize: '15px',
    fontFamily: 'monospace',
  }),
  screenContPower: css({
    content: '""',
    position: 'absolute',
    width: '10px',
    height: '10px',
    top: '100px',
    left: '20px',
    borderRadius: '100%',
    backgroundColor: '#b98181',
    transition: 'backgroundColor 300ms linear',
    '&:before': {
      content: '"BATTERY"',
      position: 'relative',
      top: '18px',
      left: '-10px',
      fontSize: '8px',
      fontFamily: 'sans-serif',
      color: '#b3b3b3',
    },
    '.powerOn': {
      backgroundColor: '#f00',
      boxShadow: '0 0 3px 1px #ef5350',
    }
  }),
  controlsCont: css({
    display: 'block',
    position: 'relative',
    marginTop: '90px',
  }),
  btnDirection: css({
    position: 'relative',
    marginLeft: '40px',
    top: '60px',
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: '1',
      top: '30px',
      left: '30px',
      width: '30px',
      height: '30px',
      backgroundColor: '#353535',
      borderRadius: '100%',
    },
    '.vertical, .horizontal': {
      position: 'absolute',
      left: '30px',
      width: '30px',
      height: '90px',
      background: '#444',
      borderRadius: '5px',
      '&:before': {
        content: '""',
        position: 'relative',
        top: '99px',
        left: '8px',
        width: '0',
        height: '0',
        borderLeft: '7px solid transparent',
        borderRight: '7px solid transparent',
        borderTop: '7px solid #dedede',
      },
      '&:after': {
        content: '""',
        position: 'relative',
        top: '-27px',
        left: '-5.6px',
        width: '0',
        height: '0',
        borderLeft: '7px solid transparent',
        borderRight: '7px solid transparent',
        borderBottom: '7px solid #dedede',
      },
    },
    '.horizontal': {
      transform: 'rotate(90deg)',
    }
  }),
  btnAB: css({
    position: 'absolute',
    top: '72px',
    left: '252px',
    width: '130px',
    height: '60px',
    background: '#dfdfdf',
    borderRadius: '30px',
    transform: 'rotate(-25deg)',
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '8px',
      right: '9px',
      width: '44px',
      height: '44px',
      background: '#a93671',
      boxShadow: '68px 0 #a93671',
      borderRadius: '100%',
      transform: 'rotate(180deg)',
    }
  }),
  btnStartSelect: css({
    position: 'absolute',
    top: '205px',
    left: '140px',
    height: '12px',
    width: '60px',
    background: '#999',
    borderRadius: '10px',
    transform: 'rotate(-25deg)',
    boxShadow: '57px 27px #999, 0 0 0 5px #dfdfdf, 57px 27px 0 5px #dfdfdf',
  }),
  speakers: css({
    content: '""',
    position: 'relative',
    height: '70px',
    width: '8px',
    top: '260px',
    left: '300px',
    background: '#ddd',
    borderRadius: '4px',
    transform: 'rotate(-25deg)',
    boxShadow: '20px 0 #ddd, 40px 0 #ddd, 60px 0 #ddd, 80px 0 #ddd, 100px 0 #ddd',
  }),
  phones: css({
    position: 'absolute',
    bottom: '4px',
    left: '50%',
    padding: '3px 5px',
    transform: 'translateX(-50%)',
    color: '#dadada',
    backgroundColor: '#e8e8e8',
    fontSize: '8px',
    fontFamily: 'sans-serif',
    textTransform: 'uppercase',
    borderRadius: '30px',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '15px',
      height: '5px',
      bottom: '-4px',
      backgroundColor: '#e8e8e8',
      left: '9px',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '3px',
      height: '5px',
      bottom: '-4px',
      left: '12px',
      backgroundColor: '#ddd',
      boxShadow: '5px 0 #ddd',
      borderRadius: '4px 4px 0 0',
    }
  }),
  onOff: css({
    position: 'absolute',
    top: '2px',
    left: '20%',
    padding: '3px 5px',
    transform: 'translateX(-50%)',
    color: '#dadada',
    backgroundColor: '#e8e8e8',
    fontSize: '8px',
    fontFamily: 'sans-serif',
    textTransform: 'uppercase',
    borderRadius: '30px',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '15px',
      height: '5px',
      top: '-2px',
      backgroundColor: '#e8e8e8',
      left: '6px',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '3px',
      height: '5px',
      top: '-2px',
      left: '9px',
      backgroundColor: '#ddd',
      boxShadow: '5px 0 #ddd',
      borderRadius: '0 0 3px 3px',
    }
  }),
  ghImg: css({
    position: 'absolute',
    top: '0',
    right: '0',
    border: '0',
  })
}