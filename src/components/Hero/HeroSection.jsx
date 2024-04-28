import { Container, Box, Typography, Button } from '@mui/material';
import bg from '../../assets/illustration-intro.svg'
import Navigation from '../Navigation/Navbar'

function HeroSection() {
  // const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container sx={{ backgroundColor: '#fff' }}>
      <Navigation />
      <Box
        sx={{
          display: 'flex',
          paddingTop: '120px',
          gap: '50px',
          flexDirection: { xs: 'column', md: 'row' }, // Switching direction on smaller screens
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100vw'
        }}
      >
        <Box sx={{  display: 'flex', flexDirection: 'column'}}> 
          <Typography variant='myHeader'>
            Bring everyone together to build better products.
          </Typography>
          <Typography variant='myParagraph' sx={{
            margin: { xs: '5px 0px', md: '25px 0px' }
          }}>
            Manage makes it simple for software teams to plan <br /> day-to-day tasks while
            keeping the larger team goals in view.
          </Typography>
          <Button variant='contained' 
            sx={{
              padding: '10px 30px', 
              borderRadius: '30px', 
              width: 'fit-content',
              textTransform: 'capitalize'
            }}
          >Get Started</Button>
        </Box>
        <img src={bg} alt="chart" style={{ width: '100%', height: '80vh' }} />
      </Box>
    </Container>
  );
}

export default HeroSection;
