const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')
const { join } = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        bronze: '#CD7F32',
        silver: '#C0C0C0',
        gold: '#FFD700',
        primary: '#cfbcff',
        'on-primary': '#381e72',
        'primary-container': '#4f378a',
        'on-primary-container': '#e9ddff',
        'inverse-primary': '#6750A4',
        'primary-fixed': '#EADDFF',
        'primary-fixed-dim': '#D0BCFF',
        'on-primary-fixed': '#21005D',
        'on-primary-fixed-variant': '#4F378B',
        secondary: '#cbc2db',
        'on-secondary': '#332d41',
        'secondary-container': '#4a4458',
        'on-secondary-container': '#e8def8',
        'secondary-fixed': '#E8DEF8',
        'secondary-fixed-dim': '#CCC2DC',
        'on-secondary-fixed': '#1D192B',
        'on-secondary-fixed-variant': '#4A4458',
        tertiary: '#efb8c8',
        'on-tertiary': '#4a2532',
        'tertiary-container': '#633b48',
        'on-tertiary-container': '#ffdad6',
        'tertiary-fixed': '#FFD8E4',
        'tertiary-fixed-dim': '#EFB8C8',
        'on-tertiary-fixed': '#31111D',
        'on-tertiary-fixed-variant': '#633B48',
        error: '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
        warning: '#ffb872',
        'on-warning': '#4a2800',
        'warning-container': '#6a3c00',
        'on-warning-container': '#ffdcbe',
        success: '#5edca9',
        'on-success': '#003825',
        'success-container': '#005138',
        'on-success-container': '#7cf9c4',
        info: '#84cfff',
        'on-info': '#00344c',
        'info-container': '#004c6c',
        'on-info-container': '#c7e7ff',
        background: '#1c1b1e',
        'on-background': '#e6e1e6',
        surface: '#1c1b1e',
        'on-surface': '#e6e1e6',
        'surface-variant': '#49454e',
        'on-surface-variant': '#cac4cf',
        'surface-dim': '#141218',
        'surface-bright': '#3B383E',
        'surface-container-l2': '#0F0D13',
        'surface-container-l': '#1D1B20',
        'surface-container': '#211F26',
        'surface-container-h': '#2B2930',
        'surface-container-h2': '#36343B',
        'inverse-surface': '#E6E0E9',
        'inverse-on-surface': '#322F35',
        outline: '#948f99',
        'outline-variant': '#49454F',
        scrim: '#000000',
        shadow: '#000000',
      },
      // Spacing
      spacing: {
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
      },
      // Sizing
      sizing: {
        xs: '20px',
        sm: '24px',
        md: '28px',
        lg: '32px',
        xl: '36px',
      },
      // Radius
      radius: {
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '10px',
      },
      // Shadow
      shadow: {
        xs: '0 0 4px rgba(0, 0, 0, 0.1)',
        sm: '0 0 8px rgba(0, 0, 0, 0.2)',
        md: '0 0 12px rgba(0, 0, 0, 0.3)',
        lg: '0 0 16px rgba(0, 0, 0, 0.4)',
        xl: '0 0 20px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)'],
      },
    },
  },
  plugins: [],
}
