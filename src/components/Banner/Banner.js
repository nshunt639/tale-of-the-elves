import {Box, Typography} from '@material-ui/core'

import ScrollAnimation from 'react-animate-on-scroll'

import useStyles from './Banner.styles'

const Banner = () => {
    const classes = useStyles()

    return (
            <Box className={classes.banner}>
                <img className={`${classes.hero} w-full`} src="/images/hero.png" alt="Hero" />
                <Box className={classes.help1}>
                        <Box className={classes.box}>
                            <Typography variant="body2">
                                If you are reading this letter, who ever you are, you need to help
                                me save them.
                            </Typography>
                        </Box>
                </Box>
                <Box className={classes.help2}>
                        <Box className={classes.box}>
                            <Typography variant="body2">
                                Do not let my brothers and sisters fall to the wrong hands.
                            </Typography>
                        </Box>
                </Box>
            </Box>
    )
}

export default Banner
