import React from 'react'
import {AppBar, styled, Typography} from '@mui/material'

const Navbars = styled(AppBar)`
  border: 1px solid rgb(59 74 89 / 30%);
  height: 80px;
  background: #0c0e10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled(Typography)`
  font-size: 40px;
  font-weight: bold;
`;

export default function Navbar() {
  return (
    <Navbars position="static">
        <Title>Todoz</Title>
    </Navbars>
  )
}
