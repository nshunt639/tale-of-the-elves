import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.secondary.main
    },
    section: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6)
}
}))

export default useStyles
