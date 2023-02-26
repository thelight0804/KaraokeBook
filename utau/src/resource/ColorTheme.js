import {createTheme} from '@mui/material';
import {teal, grey} from '@mui/material/colors';

const MainTheme = createTheme({
  palette: {
    primary: {
      main: teal[500] // #009688
    },
    secondary: {
      main: teal[600] // #00897b
    },
    info:{
      main: teal[700] // #00796b
    }
  }
});

const TabTheme = createTheme({
  palette:{
    primary: {
      main: grey[200] // #009688
    },
    secondary:{
      main: grey[400] // #bdbdbd
    }
  }
})

export {MainTheme, TabTheme};