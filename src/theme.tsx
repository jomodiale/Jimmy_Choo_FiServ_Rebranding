import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

export const JCTheme = {
  leftWrapperBackground: '#000',
  rightWrapperBackground: '#e2e2e2',
  leftWrapperColor: '#FFFFFF',
  rightWrapperColor: '#666',
  menuColor: '#212121',
  menuHover: '#757575',
  sale: '#bf2d2d'
}

export const Theme = {
  primaryText : '#000',
  secondaryText: '#FFFFFF',
  primary : '#ffffff',
  secondary: '#004990',
  selection : '#1372EC',
  link: '#000',
  navbar: '#062D70',
  background: '#E5E5E5',
  button : '#000',
  footer: '#262646',
  resultLink: '#000',
  excerpt : '#212121',
  headerIconColor : "grey"
}

const theme = createTheme({
  palette: {
    mode: 'light',
    text :{
      primary : Theme.primaryText
    },
    primary: {
      main: Theme.primary,
    },
    secondary: {
      main: Theme.secondary,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Gibson,Noto Sans, Avenir, Helvetica, Arial, sans-serif',
    fontSize: 16,
    fontWeightRegular : '300',
    fontWeightMedium : '400'
  },
});

export default theme;
