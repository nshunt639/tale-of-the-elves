import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {position: 'relative'},
    background: {
        width: '100%'
    },
    content: {
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        color: '#1F99BD',
        marginTop: '20vw',
        [theme.breakpoints.up('sm')]: {
            marginTop: '20vw',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '20vw',
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: '260px',
        }
    },
    contentInner: {
        margin: 'auto',
        width: '60vw',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 20,
            width: '60vw'
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: 20,
            width: '60vw'
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 20,
            width: 740
        }
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 20,
        lineHeight: 0.7,
        [theme.breakpoints.up('sm')]: {
            fontSize: 40
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 60
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 70
        }
    },
    title2: {
        fontSize: 15,
        [theme.breakpoints.up('sm')]: {
            fontSize: 30
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 40
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 50
        }
    },
    roadmapItem: {
        alignItems: 'start',
        '& .MuiListItemAvatar-root': {
            marginTop: theme.spacing(0.5),
            minWidth: '20px',
            [theme.breakpoints.up('sm')]: {
                minWidth: '56px'
            },
        },
        '& .MuiTypography-root.MuiTypography-body1': {
            fontSize: 10,
            lineHeight: 1,
            [theme.breakpoints.up('sm')]: {
                fontSize: 24
            },
            [theme.breakpoints.up('md')]: {
                paddingTop: 10,
                paddingBottom: 10,
                fontSize: 34
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 46,
            }
        },
        [theme.breakpoints.up('sm')]: {
            paddingTop: 6,
            paddingBottom: 6,
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: 8,
            paddingBottom: 8,
        },
        [theme.breakpoints.up('lg')]: {
            paddingTop: 12,
            paddingBottom: 12,
        }
    }
}))

export default useStyles
