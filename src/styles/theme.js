const colors = {
  green: 'green',
  grey: '#718096',
  lightGrey: '#EDF2F7',
  dark: '#1A202C',
  blue: '#0967D2',
};

const theme = {
  text: {
    primary: colors.dark,
    secondary: colors.grey,
    link: colors.blue,
  },
  background: {
    light: colors.lightGrey,
  },
  fontFamily: {
    sans:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
    openSans: 'Open Sans',
    poppins: 'Poppins',
  },
  fontSize: {
    xs: '1.2rem',
    sm: '1.4rem',
    base: '1.6rem',
    lg: '1.8rem',
    xl: '2rem',
    '2xl': '2.4rem',
    '3xl': '3rem',
    '4xl': '3.6rem',
    '5xl': '4.8rem',
    '6xl': '6.4rem',
  },
  fontWeight: {
    normal: '400',
    bold: '700',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  spacing: {
    '1': '0.4rem',
    '2': '0.8rem',
    '3': '1.2rem',
    '4': '1.6rem',
    '5': '2rem',
    '6': '2.4rem',
    '8': '3.2rem',
    '10': '4rem',
    '12': '4.8rem',
    '16': '6.4rem',
    '20': '8rem',
    '24': '9.6rem',
    '32': '12.8rem',
    '40': '16rem',
    '48': '19.2rem',
    '56': '22.4rem',
    '64': '25.6rem',
  },
  borderRadius: {
    sm: '0.2rem',
    default: '0.4rem',
    md: '0.6rem',
    lg: '0.8rem',
    full: '9999px',
  },
  boxShadow: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
  },
  screen: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  pageMaxWidth: {
    outer: '150rem',
    inner: '120rem',
  },
  pageGutter: '4vw',
};

export default theme;
