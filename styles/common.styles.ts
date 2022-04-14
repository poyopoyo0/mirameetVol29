import { css } from '@emotion/react'
/* CSS for Tetris */
/* * {
  margin: 0;
  padding: 0;
  border: 0;
} */

/* body {
  background-color: #ddd;
} */

export const common = {
  wrapper: css({
    width: '581px',
    margin: '1em auto',
    position: 'relative',
  }),
  canvas: css({
    'position': 'absolute',
    'top': '93px',
    'left': '0',
    'right': '0',
    'margin': 'auto',
    'z-index': '100',
  })
}
