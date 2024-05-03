import React from 'react'
import { Container } from '@mui/material'

function TestimonialContainer({ children }) {
  return (
    <Container
    sx={{
        backgroundColor: 'hsl(0, 0%, 98%)',
        margin: '50px 10px',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        overflowX: 'hidden', 
        alignItems: 'center',
    }}
    >
    {children}
  </Container>
  )
}

export default TestimonialContainer


