import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    appBar: {
        // transition: 'background, height 0.5s',
        // background: '#211439f0',
        // boxShadow: '0 0 4px rgba(0, 0, 0, .5)',
        // position: 'absolute',
        zIndex: theme.zIndex.drawer + 1,

        // '&.small': {
        //     position: 'fixed',
        // },
        '&.light': {
            background: 'transparent',
            boxShadow: 'none'
        },
        color: theme.palette.text.primary
    },
    toolbar: {
        transition: 'all 0.5s',
        float: 'right',
        paddingTop: theme.spacing(4),
        // width: 'auto',
        // [theme.breakpoints.down('sm')]: {
        //     height: theme.spacing(7)
        // },
        height: theme.spacing(15),
        [theme.breakpoints.up('sm')]: {
            height: theme.spacing(25)
        },
        [theme.breakpoints.up('md')]: {
            height: theme.spacing(35)
        },
        [theme.breakpoints.up('lg')]: {
            height: theme.spacing(40)
        },
        // [theme.breakpoints.up('lg')]: {
        //     paddingLeft: theme.spacing(8),
        //     paddingRight: theme.spacing(8)
        // },
        '&.small': {
            paddingTop: theme.spacing(2),
            // flexDirection: 'row',
            // width: '100%',
            // [theme.breakpoints.down('sm')]: {
            //     height: theme.spacing(7)
            // },
            [theme.breakpoints.up('sm')]: {
                height: theme.spacing(20),
                filter: 'drop-shadow(0 0 10px #8B9BB4)'
            }
        }
    },
    toolbarInner: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    container: {
        height: '100%'
    },
    navBar: {
        textAlign: 'center'
    }
    // topMenu: {},
    // profile: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     marginLeft: theme.spacing(4)
    // }
}))

export default useStyles
