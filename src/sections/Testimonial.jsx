import React from 'react'
import { Box, Typography } from '@mui/material';
import TestimonialContainer from '../components/TestimonialContainer';
import CustomButton from '../components/CustomButton';
import AnishaAv from '../assets/avatar-anisha.png';
import AliAv from '../assets/avatar-ali.png';
import RichardAv from '../assets/avatar-richard.png';
import ShanaiAv from '../assets/avatar-shanai.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Testimonial() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 1000,
        responsive: [
          {
            breakpoint: 1024, // Adjust breakpoint for your needs
            settings: {
                dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              autoplayspeed: 1000,
            }
          }
        ]
      };
    
  return (
    <Box sx={{width: {xs: '100%', md: '115%'}, margin: {xs: '0px', md: '0px 0px 0px -100px'}, padding: {xs: '0px 20px', md: '0px'}, textAlign: 'center'}}>
        <Typography variant='myHeader' 
             sx={{
                fontSize: {xs: '20px', md: '30px'}
            }}>
            What they've said
        </Typography>
        <Slider {...settings}>
            <TestimonialContainer>
                <img src={AnishaAv} style={{width: '50px', height: '50px', zIndex: 55}} alt="anisha" />
                <Typography variant='subHeader'>Anisha Li</Typography>
                <Typography>
                    "Manage has supercharged our team’s workflow. The ability to maintain 
                    visibility on larger milestones at all times keeps everyone motivated.”
                </Typography>
            </TestimonialContainer>
            <TestimonialContainer>
                <img src={AliAv} style={{width: '50px', height: '50px'}} alt="ali" />
                <Typography variant='subHeader'>Ali Bravo</Typography>
                <Typography>
                    “We have been able to cancel so many other subscriptions since using Manage. 
                    There is no more cross-channel confusion and everyone is much more focused.” 
                </Typography>
            </TestimonialContainer>
            <TestimonialContainer>
                <img src={RichardAv} style={{width: '50px', height: '50px'}} alt="Richard" />
                <Typography variant='subHeader'>Richard Watts</Typography>
                <Typography>
                    “Manage allows us to provide structure and process. It keeps us organized and focused. 
                    I can’t stop recommending them to everyone I talk to!”
                </Typography>
            </TestimonialContainer>
            <TestimonialContainer>
                <img src={ShanaiAv} style={{width: '50px', height: '50px'}} alt="Shanai" />
                <Typography variant='subHeader' >Shanai Gough</Typography>
                <Typography>
                    “Their software allows us to track, manage and collaborate on our projects from anywhere. 
                    It keeps the whole team in-sync without being intrusive.” 
                </Typography>
            </TestimonialContainer>
            </Slider>
         <CustomButton>Get Started</CustomButton>    
    </Box>
  )
}

export default Testimonial


