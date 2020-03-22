module.exports = {
  theme: {
    interFontFeatures: {
      default: ['calt', 'liga', 'kern'],
      numeric: ['tnum', 'salt', 'ss02']
    },
    extend: {
      fontSize: {
        'xs': '11px',
        's': '13px',
        'm': '17px',
        'l': '28px',
        'xl': '36px',
        '2xl': '48px',
        '3xl': '64px',
        base: '16px',
      },
      lineHeight: {
        'lg': '1.6',
        'md': '1.33',
        'sm': '1.25',
        'xs': '1',
      },
    }
  },
  plugins: [
    require('tailwindcss-font-inter')({ // it's plugin's default settings
      a: -0.0223,
      b: 0.185,
      c: -0.1745,
      baseFontSize: 16,
      baseLineHeight: 1.5,
      importFontFace: false,
      disableUnusedFeatures: false
    })
  ]
};