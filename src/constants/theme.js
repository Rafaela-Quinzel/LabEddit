import { createMuiTheme } from '@material-ui/core/styles'
import { primaryColor, secondaryColor } from './colors'

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: '#fff'
        },
        secondary: {
            main: secondaryColor
        }
    }
})
