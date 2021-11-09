import {
    Box,
    Container,
    Grid,
    Typography
} from '@material-ui/core'
import useStyles from './Introduction.styles'
import Elf from 'components/Elf'

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
                    <Typography variant="h2">The Tale of the Elves, has just begun...</Typography>
                </Container>
            </Box>
            <Box marginTop={4}>
                <Grid container spacing={0}>
                    {ELVES.map((elf, i) => (
                        <Grid key={`elf-${i}`} item xs={12} sm={4}>
                            <Elf image={elf.image} title={elf.title} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box marginTop={4}>
                <Container maxWidth="md">
                    <Typography variant="h2">
                        7,777 Elves are being turned into NFT's.
                        <br />
                        Follow our hero's journey, as he defeats the evil who took over Chrismas.
                        <br />
                        Save the Elves!
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}

export default Introduction
