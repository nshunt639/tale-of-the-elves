import ReactDOM from 'react-dom'
import {Box, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@material-ui/core'

import ScrollAnimation from 'react-animate-on-scroll'

import useStyles from './Roadmap.styles'

import Typewriter from 'typewriter-effect/dist/core'
import React from 'react'

const ROADMAP_ITEMS = [
    'Launch all 7777 unique elves to our community',
    'Charitable donation to Toys For Tots',
    'TOTE Merch',
    'Secondary marketplace integration',
    'Scaling of Tale Of The Elves by providing quality utility (Metaverse, VR and AR integration)'
]

const RoadMapItemList = ({classes}) => {
    return (
        <List className={classes?.roadmapItems}>
            {ROADMAP_ITEMS.map((item, i) => (
                <ListItem key={`roadmap-item-${i}`} className={classes?.roadmapItem}>
                    <ListItemAvatar>
                        <Typography variant="body1">{i + 1})</Typography>
                    </ListItemAvatar>
                    <ListItemText>
                        <Typography variant="body1">{item}</Typography>
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    )
}

const Roadmap = () => {
    const classes = useStyles()

    const writeRoadmapItemList = () => {
        let $ele = document.getElementById('roadmap-item-list')
        $ele.style.display = 'block'

        const string = document.getElementById('roadmap-item-list-hidden').innerHTML

        var typewriter = new Typewriter($ele, {
            delay: 50,
            // devMode: true
        })

        typewriter.start().typeString(string)

        $ele = null
    }

    const removeRoadmapItemList = () => {
        let $ele = document.getElementById('roadmap-item-list')
        $ele.style.display = 'none'
        $ele.innerHTML = ''
        $ele = null
    }

    return (
            <Box className={classes.root}>
                <img
                    className={`${classes.background} w-full`}
                    src="/images/RoadMapBlank.gif"
                    alt="Roadmap"
                />
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
                            <Box id="roadmap-item-list">
                                <RoadMapItemList classes={classes} />
                            </Box>
                    </Box>
                </Box>
            </Box>
    )
}

export default Roadmap
