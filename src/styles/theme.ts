import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      50: '#FFFFFF',
      100: '#E3EDF5',
      300: '#8C99A2',
      500: '#666363',
      900: '#1A1A1A',
    },
    green: {
      800: '#53D46B',
    },
    blue: {
      800: '#0D2231',
    },
  },
  fonts: {
    heading: 'Mulish',
    body: 'Mulish',
  },
  styles: {
    global: {
      'html::-webkit-scrollbar': {
        bg: 'gray.100',
        w: '2.5',
      },
      'html::-webkit-scrollbar-thumb': {
        background: 'blue.800',
        borderRadius: '10px',
      },
      body: {
        bg: 'gray.100',
        color: 'gray.900',
      },
    },
  },
});
