// import { useState } from 'react'
import {Box, Container, Typography} from '@material-ui/core'
import Introduction from 'components/Introduction'
import OurTeam from 'components/OurTeam'
import Roadmap from 'components/Roadmap'

import useStyles from './Home.styles'

const Home = () => {
    const classes = useStyles()

    return (
        <Container maxWidth="lg">
            <Box className={classes.root}>
                <Box className={classes.banner}>
                    <img className={classes.hero} src="/images/hero.png" alt="Hero" />
                    <Box className={`${classes.box} ${classes.help1}`}>
                        <Typography variant="body2">
                            If you are reading this letter, who ever you are, you need to help me
                            save them.
                        </Typography>
                    </Box>
                    <Box className={`${classes.box} ${classes.help2}`}>
                        <Typography variant="body2">
                            Do not let my brothers and sisters fall to the wrong hands.
                        </Typography>
                    </Box>
                </Box>

                <Box className={classes.section} id="introduction" textAlign="center">
                    <Introduction />
                </Box>

                <Box
                    className={classes.section}
                    id="roadmap"
                    textAlign="center"
                    style={{padding: 0}}
                >
                    <Roadmap />
                </Box>

                <Box className={classes.section} id="team" textAlign="center">
                    <Typography variant="h2">Our Team</Typography>
                    <Box marginTop={1}>
                        <OurTeam />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Home
