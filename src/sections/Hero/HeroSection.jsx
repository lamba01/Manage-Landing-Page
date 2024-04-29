import { Box, Typography } from '@mui/material';
import bg from '../../assets/illustration-intro.svg'
import Navigation from '../../components/Navigation/Navbar'
import CustomButton from '../../components/CustomButton';
import CustomContainer from '../../components/CustomContainer';

function HeroSection() {

  return (
    <div style={{ backgroundColor: '#fff', zIndex: '2'}}>
      <Navigation />
      <CustomContainer>
        <Box 
          sx={{ 
            width: { xs: '100%', md: '50%' },
            display: 'flex', 
            flexDirection: 'column', 
            order: { xs: '2', md: '1' },
            textAlign: { xs: 'center', md: 'left' },
            alignItems: { xs: 'center', md: 'flex-start' },
            padding: {xs: '0px 10px', sm: '0px 20px', md: '0px'}
            }}
          > 
          <Typography variant='myHeader' 
            sx={{
              fontSize: {xs: '30px', sm: '40px', md: '50px'}
            }}
          >
            Bring everyone together to build better products.
          </Typography>
          <Typography variant='myParagraph' sx={{
            margin: { xs: '5px 0px', md: '25px 0px' },
            width: {xs: '100%', md: '70%'}
          }}>
            Manage makes it simple for software teams to plan day-to-day tasks while
            keeping the larger team goals in view.
          </Typography>
          <CustomButton>
            Get Started
          </CustomButton>
        </Box>
        <Box sx={{
          width:  { xs: '100%', md: '50%' },
          margin: '0px',
          order: { xs: '1', md: '2' },
          display: {xs: 'flex', md: 'block'},
          alignItems: 'center',
          justifyContent: 'center',
          padding: {xs: '0px 10px', sm: '0px 20px', md: '0px'}
        }}>
          <img src={bg} alt="chart" style={{width: '90%', height: 'auto', maxHeight: '80vh', minHeight: '20vh', margin: '0px', padding: '0px'}} />
        </Box>        
      </CustomContainer>
    </div>
  );
}

export default HeroSection;

