import {Box, Typography} from '@material-ui/core'

import ScrollAnimation from 'react-animate-on-scroll'

import useStyles from './Banner.styles'

const Banner = () => {
    const classes = useStyles()

    return (
        <ScrollAnimation offset={0} duration={3} animateIn="fadeIn" animateOnce={true}>
            <Box className={classes.banner}>
                <img className={`${classes.hero} w-full`} src="/images/hero.png" alt="Hero" />
                <Box className={classes.help1}>
                    <ScrollAnimation
                        offset={0}
                        delay={1500}
                        duration={1}
                        animateIn="fadeInRight"
                        animateOnce={true}
                    >
                        <Box className={classes.box}>
                            <Typography variant="body2">
                                If you are reading this letter, who ever you are, you need to help
                                me save them.
                            </Typography>
                        </Box>
                    </ScrollAnimation>
                </Box>
                <Box className={classes.help2}>
                    <ScrollAnimation offset={0} duration={1} animateIn="fadeInUp" animateOnce={true}>
                        <Box className={classes.box}>
                            <Typography variant="body2">
                                Do not let my brothers and sisters fall to the wrong hands.
                            </Typography>
                        </Box>
                    </ScrollAnimation>
                </Box>
            </Box>
        </ScrollAnimation>
    )
}

export default Banner
