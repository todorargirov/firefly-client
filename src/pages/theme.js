// import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    typography: {
        fontFamily: ['"Helvetica"', '"Arial"', 'sans-serif'].join(','),
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#ddd',
        },
        background: {
            default: '#121212',
        },
    },
});

export default theme;
