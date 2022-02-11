import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQ() {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return <>
    <Box component={'div'} sx={{ width: '100%', backgroundColor: '#0A1227',py:16 }} >
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
        flexDirection: 'column'
      }} >
        <Typography variant="h3" sx={{
          fontSize: "48px", color: '#FFFFFF', fontWeight: 700, lineHeight: "64px", fontStyle: 'normal', letterSpacing: '1%', mb: 6, textAlign: 'center'
        }} gutterBottom component="div">
          Frequently asked questions
        </Typography>
        <Box component={'div'} sx={{ width: {
          md:'80%',
          xs:'90%'
        }, mx: 'auto' }} >
          <Accordion sx={{ background: 'none', color: 'white', borderBottom: '1px solid white', borderBottomLeftRadius: '0px', py: 2 }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant='h5' sx={{ flexShrink: 0, mr: 4 }}>
                01
              </Typography>
              <Typography variant='h5' sx={{ color: 'white', }}>Can I know more about Febeth?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Fabeth is a Austrian play-and-earn gamefi DAO. Febeth partners with other traditional game developers  across the globe to integrate their games on blockchain.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ background: 'none', color: 'white', borderBottom: '1px solid white', borderBottomLeftRadius: '0px', py: 2 }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant='h5' sx={{ flexShrink: 0, mr: 4 }}>
                02
              </Typography>
              <Typography variant='h5' sx={{ color: 'white', }}>How does Febeth play-and-earn work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Fabeth is a Austrian play-and-earn gamefi DAO. Febeth partners with other traditional game developers  across the globe to integrate their games on blockchain.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ background: 'none', color: 'white', borderBottom: '1px solid white', borderBottomLeftRadius: '0px', py: 2 }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant='h5' sx={{ flexShrink: 0, mr: 4 }}>
                03
              </Typography>
              <Typography variant='h5' sx={{ color: 'white', }}>Can I  deploy my games on the blockchain through Febeth </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Fabeth is a Austrian play-and-earn gamefi DAO. Febeth partners with other traditional game developers  across the globe to integrate their games on blockchain.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ background: 'none', color: 'white', borderBottom: '1px solid white', borderBottomLeftRadius: '0px', py: 2 }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant='h5' sx={{ flexShrink: 0, mr: 4 }}>
                04
              </Typography>
              <Typography variant='h5' sx={{ color: 'white', }}>How do I get unoque gaming assets on Febeth?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Fabeth is a Austrian play-and-earn gamefi DAO. Febeth partners with other traditional game developers  across the globe to integrate their games on blockchain.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ background: 'none', color: 'white', borderBottom: '1px solid white', borderBottomLeftRadius: '0px', py: 2 }} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant='h5' sx={{ flexShrink: 0, mr: 4 }}>
                05
              </Typography>
              <Typography variant='h5' sx={{ color: 'white', }}>What type of games can I play on Febeth?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Fabeth is a Austrian play-and-earn gamefi DAO. Febeth partners with other traditional game developers  across the globe to integrate their games on blockchain.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  </>
}

export default FAQ;


