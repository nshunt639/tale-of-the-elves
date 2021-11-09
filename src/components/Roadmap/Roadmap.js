import {Box, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@material-ui/core'

import ScrollAnimation from 'react-animate-on-scroll'

import useStyles from './Roadmap.styles'

const ROADMAP_ITEMS = [
    'Launch all 7777 unique elves to our community',
    'Charitable donation to Topys For Tots',
    'TOTOE Merch',
    'Secondary marketplace integration',
    'Scaling of Tale Of The Elves by providing quality utility(Metaverse, VR and AR integration)'
]
const Roadmap = () => {
    const classes = useStyles()

    return (
        <ScrollAnimation animateIn="fadeIn" duration={3} offset={400}>
            <Box className={classes.root}>
                <img className={`${classes.background} w-full`} src="/images/RoadMapBlank.gif" alt="Roadmap" />
                <Box className={classes.content} textAlign="left">
                    <Box className={classes.contentInner}>
                        <ScrollAnimation animateIn="bounceInDown" offset={300}>
                            <Box textAlign="center">
                                <Typography variant="h3" className={classes.title}>
                                    Project S.O.C.
                                </Typography>
                                <Typography variant="h4" className={classes.title2}>
                                    <small>(Roadmap)</small>
                                </Typography>
                            </Box>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" offset={300}>
                            <Box>
                                <List className={classes.roadmapItems}>
                                    {ROADMAP_ITEMS.map((item, i) => (
                                        <ListItem
                                            key={`roadmap-item-${i}`}
                                            className={classes.roadmapItem}
                                        >
                                            <ListItemAvatar>
                                                <Typography variant="body1">{i + 1})</Typography>
                                            </ListItemAvatar>
                                            <ListItemText>
                                                <Typography variant="body1">{item}</Typography>
                                            </ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </ScrollAnimation>
                    </Box>
                </Box>
            </Box>
        </ScrollAnimation>
    )
}

export default Roadmap
