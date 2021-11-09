import {Box, Container, Grid} from '@material-ui/core'
import TeamMember from 'components/TeamMember'

import useStyles from './OurTeam.styles'

const TEAM_MEMBERS = [
    {name: 'Name 1', title: 'Title 1', image: '/images/team/1.gif', twitter: '', discord: ''},
    {name: 'Name 2', title: 'Title 2', image: '/images/team/2.gif', twitter: '', discord: ''},
    {name: 'Name 3', title: 'Title 3', image: '/images/team/3.gif', twitter: '', discord: ''},
    {name: 'Name 4', title: 'Title 4', image: '/images/team/4.gif', twitter: '', discord: ''},
    {name: 'Name 5', title: 'Title 5', image: '/images/team/5.gif', twitter: '', discord: ''},
    {name: 'Name 6', title: 'Title 6', image: '/images/team/6.gif', twitter: '', discord: ''}
]
const OurTeam = () => {
    const classes = useStyles()

    return (
        <Container maxWidth="md">
            <Box className={classes.root}>
                <Grid container spacing={3}>
                    {TEAM_MEMBERS.map((member, i) => (
                        <Grid key={`team-member-${i}`} item xs={12} sm={4}>
                            <TeamMember {...member} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}

export default OurTeam
