import React from 'react';
import { Box } from '@mui/material';

function CustomContainer({ children, ...props }) {
  return (
    <Box 
      sx={{
        margin: '100px 0px 0px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '50px',
        padding: {xs: '0px 20px', md: '0px 70px'}
      }}
      {...props}>
      {children}
    </Box>
  );
}

export default CustomContainer;
