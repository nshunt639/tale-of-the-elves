import {Box, Container, Grid, Typography} from '@material-ui/core'
import Elf from 'components/Elf'

import ScrollAnimation from 'react-animate-on-scroll'

import useStyles from './Introduction.styles'

const ELVES = [
    {title: 'Elf 1', image: '/images/elves/1.gif'},
    {title: 'Elf 1', image: '/images/elves/2.gif'},
    {title: 'Elf 1', image: '/images/elves/3.gif'}
]
const Introduction = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box>
                <Container maxWidth="md">
                    <ScrollAnimation animateIn="fadeInDown" offset={400}>
                        <Typography variant="h2">
                            The Tale of the Elves, has just begun...
                        </Typography>
                    </ScrollAnimation>
                </Container>
            </Box>
            <Box marginTop={4}>
                <Grid container spacing={0}>
                    {ELVES.map((elf, i) => (
                        <Grid key={`elf-${i}`} item xs={12} sm={4}>
                            <ScrollAnimation
                                animateIn="bounceIn"
                                duration={3}
                                delay={1000}
                                offset={300}
                            >
                                <Elf image={elf.image} title={elf.title} />
                            </ScrollAnimation>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box marginTop={4}>
                <Container maxWidth="md">
                    <ScrollAnimation
                        animateIn="fadeInUp"
                        duration={1.5}
                        offset={300}
                        delay={1000}
                    >
                        <Typography variant="h2">
                            7,777 Elves are being turned into NFT's.
                            <br />
                            Follow our hero's journey, as he defeats the evil who took over
                            Chrismas.
                            <br />
                            Save the Elves!
                        </Typography>
                    </ScrollAnimation>
                </Container>
            </Box>
        </Box>
    )
}

export default Introduction
