import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    gray: {
      950: '#09090A',
      900: '#121214',
      800: '#202024',
      600: '#323238',
      300: '#8D8D99',
      200: '#C4C4CC',
      100: '#D9D9D9',
    },
    green: {
      500: '#047C3F'
    },
    yellow: {
      500: '#F7DD43',
      600: '#BBA317',
    },
    red: {
      500: '#E40032',
      300: '#DB4437',
    },
    blue: {
      300: '#4267B2'
    },
    white: '#FFFFFF'
  },
  fonts: {
    heading: 'Poppins_700Bold',
    body: 'Poppins_400Regular',
    medium: 'Poppins_500Medium'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  sizes: {
    14: 56,
    22: 87,
  }
});