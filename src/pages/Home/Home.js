// import { useState } from 'react'
import {Box, Container} from '@material-ui/core'
import Banner from 'components/Banner'
import Introduction from 'components/Introduction'
import Roadmap from 'components/Roadmap'
import OurTeam from 'components/OurTeam'

import useStyles from './Home.styles'

const Home = () => {
    const classes = useStyles()

    return (
        <Container maxWidth="lg">
            <Box className={classes.root}>
                <Box className={classes.section} style={{padding: 0}}>
                    <Banner />
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
                    <OurTeam />
                </Box>
            </Box>
        </Container>
    )
}

export default Home
