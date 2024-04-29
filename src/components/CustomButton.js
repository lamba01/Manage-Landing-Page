import React from 'react';
import { Button } from '@mui/material';

function CustomButton({ children, ...props }) {
  return (
    <Button
      variant='contained'
      sx={{
        padding: '7px 30px', 
        borderRadius: '30px', 
        width: 'fit-content',
        textTransform: 'capitalize',
        fontWeight: 700,
        ...props.sx // Allow custom styling to be passed
      }}
      {...props} // Pass other props to the Button component
    >
      {children}
    </Button>
  );
}

export default CustomButton;
