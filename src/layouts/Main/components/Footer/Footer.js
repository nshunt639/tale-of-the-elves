import {Box, Container, IconButton, Link, Typography} from '@material-ui/core'
import {SportsEsports, Twitter} from '@material-ui/icons'
import useStyles from './Footer.styles'

const Footer = () => {
    const classes = useStyles()

    return (
        <Container maxWidth="lg">
            <Box className={classes.root} textAlign="center">
                <img
                    className={`${classes.logo} responsive`}
                    src="/images/logo.png"
                    alt="Tale Of The Elves"
                />
                <Box padding={2}>
                    <Typography variant="subtitle2">
                        Copyright © Tale Of The Elves 2021. All rights reserved
                    </Typography>
                </Box>
                <Box>
                    <IconButton href="https://discord.gg/MfD666Qk">
                        <img
                            className="social-icon"
                            src="/images/discord.png"
                            alt="Tale Of The Elves Discord"
                        />
                    </IconButton>
                    <IconButton href="https://twitter.com/TaleoftheElves">
                        <img
                            className="social-icon"
                            src="/images/twitter.png"
                            alt="Tale Of The Elves Twitter"
                        />
                    </IconButton>
                </Box>
            </Box>
        </Container>
    )
}

export default Footer
