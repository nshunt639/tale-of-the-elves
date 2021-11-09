import {
    useScrollTrigger,
    AppBar,
    Box,
    Toolbar,
    Link,
    IconButton,
    Container
} from '@material-ui/core'
import useStyles from './Header.styles'

import Logo from './Logo'

import ScrollAnimation from 'react-animate-on-scroll'

const Header = () => {
    const isScrolling = useScrollTrigger({
        disableHysteresis: true,
        threshold: 160
    })

    const isLightHeader = true // !isScrolling

    const classes = useStyles()

    const withSmallStyles = className => {
        const smallClass = isScrolling ? ' small' : ''
        return `${className}${smallClass}`
    }

    return (
        <AppBar
            elevation={0}
            className={`${withSmallStyles(classes.appBar)} ${isLightHeader ? ' light' : ''}`}
        >
            <Container className={classes.container} maxWidth="lg">
                <Toolbar className={withSmallStyles(classes.toolbar)}>
                    <ScrollAnimation
                        offset={0}
                        duration={1}
                        animateIn="slideInDown"
                        animateOnce={true}
                        style={{height: '100%'}}
                    >
                        <Box className={classes.toolbarInner}>
                            <Logo />

                            <Box className={withSmallStyles(classes.navBar)}>
                                <Box>
                                    <IconButton component={Link} href="https://discord.gg/MfD666Qk">
                                        <img
                                            className="social-icon"
                                            src="/images/discord.png"
                                            alt="Tale Of The Elves Discord"
                                        />
                                    </IconButton>
                                    <IconButton
                                        component={Link}
                                        href="https://twitter.com/TaleoftheElves"
                                    >
                                        <img
                                            className="social-icon"
                                            src="/images/twitter.png"
                                            alt="Tale Of The Elves Twitter"
                                        />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </ScrollAnimation>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
