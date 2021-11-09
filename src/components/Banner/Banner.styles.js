import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    banner: {
        width: '100%',
        position: 'relative'
    },
    hero: {
        [theme.breakpoints.down('sm')]: {
            minHeight: '100vh',
            objectFit: 'cover'
        }
    },
    help1: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginLeft: '-30px',
        marginTop: '-100px',
        width: 180,
        [theme.breakpoints.up('sm')]: {
            width: 300
        },
        [theme.breakpoints.up('md')]: {
            width: 400
        },
        [theme.breakpoints.up('lg')]: {
            width: 600
        }
    },
    help2: {
        position: 'absolute',
        bottom: theme.spacing(6),
        left: '50%',
        marginLeft: '-150px',
        width: 300,
        [theme.breakpoints.up('sm')]: {
            marginLeft: '-300px',
            width: 600
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '-400px',
            width: 800
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: '-425px',
            width: 851
        }
    },
    box: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        border: `5px solid ${theme.palette.secondary.main}`,
        background: theme.palette.primary.main,
        color: theme.palette.secondary.main
    }
}))

export default useStyles
