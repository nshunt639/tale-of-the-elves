import {
    Box,
    Container,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from '@material-ui/core'
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
        <Box className={classes.root}>
            <img className={classes.background} src="/images/RoadMapBlank.gif" alt="Roadmap" />
            <Box className={classes.content} textAlign="left">
                <Box className={classes.contentInner}>
                    <Box textAlign="center">
                        <Typography variant="h3" className={classes.title}>
                            Project S.O.C.
                        </Typography>
                        <Typography variant="h4" className={classes.title2}>
                            <small>(Roadmap)</small>
                        </Typography>
                    </Box>
                    <Box>
                        <List className={classes.roadmapItems}>
                            {ROADMAP_ITEMS.map((item, i) => (
                                <ListItem key={`roadmap-item-${i}`} className={classes.roadmapItem}>
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
                </Box>
            </Box>
        </Box>
    )
}

export default Roadmap
