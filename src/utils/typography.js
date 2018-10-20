import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'Lucida Grande',
    'sans-serif'
  ],
  bodyFontFamily: ['sofia-pro', "sans-serif"],
  bodyColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: 600,
  bodyWeight: 400,
  boldWeight: 600,
  a: {
    boxShadow: '0 1px 0 0 currentColor',
    color: 'hsla(0,0%,0%,0.9)',
    textDecoration: 'none',
  },
  'a:hover,a:active': {
    boxShadow: 'none',
    color: 'hsla(0,0%,0%,0.9)',
  },
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
