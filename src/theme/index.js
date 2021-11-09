import {createTheme, responsiveFontSizes} from '@material-ui/core'
import typography from './typography'

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#fff',
            contrastText: '#000'
        },
        secondary: {
            main: '#000',
            contrastText: '#fff'
        },
        text: {
            primary: '#fff',
            secondary: '#000'
        }
    },
    shape: {},
    typography,
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '*': {
                    boxSizing: 'border-box'
                },
                html: {
                    '-webkit-font-smoothing': 'antialiased',
                    '-moz-osx-font-smoothing': 'grayscale',
                    'scroll-behavior': 'smooth'
                },
                body: {}
            }
        },
        MuiContainer: {
            root: {
                paddingLeft: 0,
                paddingRight: 0
            },
            paddingLeft: 0,
            paddingRight: 0
        }
    }
})

theme.props = {
    MuiPaper: {
        elevation: 0
    },
    MuiButton: {
        disableElevation: true
    },
    MuiLink: {
        underline: 'none'
    }
}

export default responsiveFontSizes(theme)
