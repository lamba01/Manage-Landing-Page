import React from 'react'
import { Box, Typography, Container } from '@mui/material';
import CustomButton from '../components/CustomButton';
import CustomContainer from '../components/CustomContainer';

function About() {
  return (
    <Box sx={{margin: {xs: '-70px 0px 0px 0px', md: '100px 0px 0px 0px'}}}>
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
                flexDirection: {xs: 'column', md: 'row'},
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Container sx={{display: 'flex', alignItems: 'flex-start', gap: '20px', margin: '0px 0px 20px 0px'}}>
                    <CustomButton>
                        01
                    </CustomButton>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: {xs: '15px', md: '10px'}, marginTop: '5px' }}>
                    <Typography variant='subHeader'>
                        Track company-wide progress
                    </Typography>           
                    <Typography variant='myParagraph' sx={{marginLeft: {xs: '-80px', md: "0px"}}}>
                        See how your day-to-day tasks fit into the wider vision. 
                        Go from tracking progress at the milestone level all the way done to the smallest of details. 
                        Never lose sight of the bigger picture again.
                    </Typography>
                    </Box>  
                </Container>
                <Container sx={{display: 'flex', alignItems: 'flex-start', gap: '20px', margin: '20px 0px'}}>
                    <CustomButton>
                        02
                    </CustomButton>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: {xs: '15px', md: '10px'}, marginTop: '5px' }}>
                    <Typography variant='subHeader'>
                        Advanced built-in reports
                    </Typography>
                    <Typography variant='myParagraph' sx={{marginLeft: {xs: '-80px', md: "0px"}}}>
                        Set internal delivery estimates and track progress toward company goals. 
                        Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed. 
                    </Typography>
                    </Box>
                </Container>
                <Container sx={{display: 'flex', alignItems: 'flex-start', gap: '20px', margin: '20px 0px'}}>
                    <CustomButton>
                        03
                    </CustomButton>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: {xs: '15px', md: '10px'}, marginTop: '5px' }}>
                    <Typography variant='subHeader'>
                        Everything you need in one place
                    </Typography>
                    <Typography variant='myParagraph' sx={{marginLeft: {xs: '-80px', md: "0px"}}}>
                        Stop jumping from one service to another to communicate, store files, track tasks and share documents. 
                        Manage offers an all-in-one team productivity solution.
                    </Typography>
                    </Box>
                </Container>
            </Box>
        </CustomContainer>
    </Box>
  )
}

export default About