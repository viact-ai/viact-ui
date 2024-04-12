import {
  BLACK,
  BLUE,
  GREEN,
  GREY,
  MINT,
  ORANGE,
  RED,
  YELLOW,
} from './variables'

const PRIMARY = {
  main: ORANGE[0],
}
const SECONDARY = {
  main: BLUE[100],
}
const INFO = {
  main: BLUE[0],
}
const SUCCESS = {
  main: GREEN[0],
}
const WARNING = {
  main: YELLOW[0],
}
const ERROR = {
  main: RED[0],
}

const GRADIENTS = {
  primary: 'linear-gradient(270deg, #FF6A3D 0%, #F2C94C 100%)',
  secondary: 'linear-gradient(90deg, #47A0D4 0%, #47D4C1 100%)',
  dark: 'linear-gradient(222.53deg, #F1F1F5 0%, #CFCED8 52.35%)',
}

const COMMON = {
  common: { black: BLACK[0], white: GREY[0] },
  primary: { ...PRIMARY, contrastText: GREY[0] },
  secondary: { ...SECONDARY, contrastText: GREY[0] },
  info: { ...INFO, contrastText: GREY[0] },
  success: { ...SUCCESS, contrastText: GREY[0] },
  warning: { ...WARNING, contrastText: GREY[0] },
  error: { ...ERROR, contrastText: GREY[0] },
  gradients: GRADIENTS,
  grey: GREY,
  orange: ORANGE,
  blue: BLUE,
  mint: MINT,
  black: BLACK,
  green: GREEN,
  red: RED,
}

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: {
      black: BLACK[0],
      primary: BLACK[100],
      secondary: BLACK[200],
      disabled: GREY[300],
      error: RED[0],
      success: GREEN[0],
      info: BLUE[100],
    },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: { active: GREY[600], selected: BLUE[0] },
  },
}

export default palette
