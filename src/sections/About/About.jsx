import React from 'react'
import { Box, Typography, Container } from '@mui/material';
import CustomButton from '../../components/CustomButton';
import CustomContainer from '../../components/CustomContainer';

function About() {
  return (
    <div>
        <CustomContainer>
            <Box 
              sx={{ 
                width: { xs: '100%', md: '50%' },
                display: 'flex', 
                flexDirection: 'column', 
                textAlign: { xs: 'center', md: 'left' },
                alignItems: { xs: 'center', md: 'flex-start' },
              }}
            >
                <Typography variant='myHeader'             
                    sx={{
                        fontSize: {xs: '20px', md: '30px'}
                    }}
                >
                    What's different about Manage?
                </Typography>
                <Typography variant='myParagraph'>
                    Manage provides all the functionality your team needs, without the complexity. 
                    Our software is tailor-made for modern digital product teams.
                </Typography>
            </Box>
            <Box 
             sx={{
                width:  { xs: '100%', md: '50%' },
                margin: '0px',
                display: {xs: 'flex', md: 'block'},
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Container sx={{display: 'flex', alignItems: 'flex-start', gap: '20px', margin: '0px 0px 40px 0px'}}>
                    <CustomButton>
                        01
                    </CustomButton>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
                    <Typography variant='subHeader'>
                        Track company-wide progress
                    </Typography>
                   
                    <Typography variant='myParagraph'>
                        See how your day-to-day tasks fit into the wider vision. 
                        Go from tracking progress at the milestone level all the way done to the smallest of details. 
                        Never lose sight of the bigger picture again.
                    </Typography>
                    </div>  
                </Container>
                <Container sx={{display: 'flex', alignItems: 'flex-start', gap: '20px', margin: '40px 0px'}}>
                    <CustomButton>
                        02
                    </CustomButton>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',gap: '10px' }}>
                    <Typography variant='subHeader'>
                        Advanced built-in reports
                    </Typography>
                    <Typography variant='myParagraph'>
                        Set internal delivery estimates and track progress toward company goals. 
                        Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed. 
                    </Typography>
                    </div>
                </Container>
                <Container sx={{display: 'flex', alignItems: 'flex-start', gap: '20px', margin: '40px 0px'}}>
                    <CustomButton>
                        03
                    </CustomButton>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',gap: '10px' }}>
                    <Typography variant='subHeader'>
                        Everything you need in one place
                    </Typography>
                    <Typography variant='myParagraph'>
                        Stop jumping from one service to another to communicate, store files, track tasks and share documents. 
                        Manage offers an all-in-one team productivity solution.
                    </Typography>
                    </div>
                </Container>
            </Box>
        </CustomContainer>
    </div>
  )
}

export default About