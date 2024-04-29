import React from 'react';
import { Container } from '@mui/material';

function CustomContainer({ children, ...props }) {
  return (
    <Container 
      sx={{
        display: 'flex',
        paddingTop: '120px',
        gap: '30px',
        paddingLeft: { xs: '0px', md: '100px' },
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100vw',
      }}
      {...props}>
      {children}
    </Container>
  );
}

export default CustomContainer;
