import React from 'react'
import {AppBar, Box, Typography, styled, Input} from '@mui/material'

const Navbar = styled(AppBar)`
  border: 1px solid rgb(59 74 89 / 30%);
  height: 80px;
  background: rgb(39 39 39);
  display: flex;
  align-items: center ;
  justify-content: center;
`
const Title = styled(Typography)`
  font-size: 40px;
  
  font-weight: bold;
`

const Body = styled(Box)`
  height:86.6vh;
  width: 100%;
  background: #101418;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InputBox = styled(Box)`
  border: 1px solid rgb(59 74 89 / 30%);
  height: 450px;
  width: 450px;
  color: #878787;
  border-radius: 20px;
  padding: 20px;  
  background: #0c0e10;
`

const Inp = styled(Input)`
  color: #FFFFFF;
  outline: none;
  width: 100%;
  border: 1px solid #878787;
  border-radius: 5px;
  height: 40px;
  padding: 5px 10px;
  margin-bottom: 30px;  
`

export default function AddTask() {
  return (
    <Box>
      <Navbar position='static'>
        <Title>To Do List</Title>
      </Navbar>
      <Body>
        <InputBox>
          <Typography style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center', paddingBottom: 20}} level='h1'>Add Task</Typography>
          <Typography style={{fontWeight: '500', fontSize: 20}}>Task</Typography>
          <Inp placeholder="Enter Task" variant="none"  />
          <Typography style={{fontWeight: '500', fontSize: 20}}>Status</Typography>
          <Inp placeholder="Enter Status" variant="none"  />
          <Typography style={{fontWeight: '500', fontSize: 20}}>Deadline</Typography>
          <Inp type='date' sx={{color: '#ffffff'}} placeholder="Enter Task" variant="none"  />
        </InputBox>
      </Body>
    </Box>
  )
}
