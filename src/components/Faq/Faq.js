import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    Typography
} from '@material-ui/core'

import ScrollAnimation from 'react-animate-on-scroll'

import useStyles from './Faq.styles'

const FAQ_DATA = [
    [
        'What is Tale of the Elves?',
        'Tale of the Elves is a unique collection of pixel art Elf NFT’s. We want to carry the Christmas spirit into the NFT world and make everyone’s Christmas a little more merrier with our Elves!'
    ],
    ['When is launch day?', 'In late December around Christmas, exact date TBA.'],
    [
        'Which blockchain are we launching on?',
        "The Solana blockchain has been chosen due to it's largescale adoption, speed and low transaction fees."
    ],
    [
        'What is the price for minting?',
        'Also TBA, will be announced at latest 2 weeks before launch.'
    ],
    ['What is the supply?', "The collection will consist of 7,777 uniquely crafted NFT's."],
    [
        'Where can I buy one?',
        'Digital Eyes, Magic Eden and hopefully Solanart. If more secondary marketplaces are developed before our mint we will also look into listing with them.'
    ],
    ['Which wallets can I use?', 'Phantom, Sollet and Solflare wallet.'],
    [
        'Will we be doing giveaways?',
        'Yes we will, follow our twitter and check announcements frequently to stay updated.'
    ]
]
const Faq = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <ScrollAnimation animateIn="fadeIn">
                <Typography variant="h2">FAQ</Typography>
                <Box marginTop={4} textAlign="left">
                    <Container maxWidth="md">
                        {FAQ_DATA.map(([question, answer], i) => (
                            <Accordion>
                                <AccordionSummary
                                // expandIcon={<ExpandMoreIcon />}
                                // aria-controls="panel1bh-content"
                                // id="panel1bh-header"
                                >
                                    {/* <Typography className={classes.heading} variant='h4'>{item.question}</Typography> */}
                                    <Typography
                                        className={classes.secondaryHeading}
                                        variant="body1"
                                    >
                                        {question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body1">{answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Container>
                </Box>
            </ScrollAnimation>
        </Box>
    )
}

export default Faq
