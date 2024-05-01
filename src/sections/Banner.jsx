import React from 'react'
import CustomContainer from '../components/CustomContainer'
import CustomButton from '../components/CustomButton'
import { Typography } from '@mui/material'

function Banner() {
  return (
    <CustomContainer style={{backgroundColor: 'hsl(12, 88%, 59%)', gap: '10px', paddingTop: '50px', paddingBottom: '50px', alignItems: 'center', justifyContent: 'space-between'}}>
        <Typography sx={{
            fontSize: {xs: '20px', md: '40px'},
            color: '#fff',
            fontWeight: 700,
            width: {xs: '100%', md: '60%'},
            textAlign: {xs: 'center', md: 'start'}
        }}>
            Simplify how your team works today.
        </Typography>
        <CustomButton style={{backgroundColor: 'hsl(0, 0%, 98%)', color: 'hsl(12, 88%, 59%)', width: {xs: '100%', md: '40%'}}}>
            Get Started
        </CustomButton>
    </CustomContainer>
  )
}

export default Banner