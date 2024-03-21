import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deleteTask, getTask } from '../services/api';
import { styled, Box, Button } from '@mui/material';

const Container = styled(Box)`
  padding: 80px 50px;
  height: 100vh;
  background-color: #101418;
`

const TableBox = styled(Table)`
  background: #0c0e10;
  border: 1px solid rgb(121, 121, 120);
  border-radius: 8px;
`

const Cell = styled(TableCell)`
  color: #dfdfdf;
`

const ButtonBox = styled(Box)`
  text-align: center;
  padding: 20px;
`

export default function Todo() {

  const navigate = useNavigate();

  const [task, setTask] = useState([])

  useEffect(()=>{
    getTodoData();
  }, [])

  const getTodoData = async() => {
    let response = await getTask();
    setTask(response.data.message);
  }

  const deleteOneTask = async(id) => {
    await deleteTask(id);
    getTodoData();
  }

  const editTask = (id) => {
    navigate(`/edit/${id}`);
  }

  return (
    <Container>
    <TableContainer component={Paper}>
      <TableBox sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <Cell >Task</Cell>
            <Cell >Deadline</Cell>
            <Cell >Status</Cell>
            <Cell >Status</Cell>
            <Cell >Actions</Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          { task && task.map((task) => (
            <TableRow
              key={task.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <Cell  >{task.status}</Cell>
              <Cell  >{task.task}</Cell>
              <Cell  >{task.task}</Cell>
              <Cell  >{task.deadline ? new Date(task.deadline).toLocaleString(): ''}</Cell>
              <Cell  >
                <Button style={{marginRight: 10}} onClick={() => editTask(task._id)} variant="contained" color="success">Edit</Button>
                <Button variant="contained" onClick={() => deleteOneTask(task._id)} color="error">Delete</Button>
              </Cell>
            </TableRow> 
          ))
        }
        </TableBody>
      </TableBox>
    </TableContainer>
    <ButtonBox >
      <Button onClick={() => navigate("/")} variant="contained" color="success">Add Task</Button>
    </ButtonBox>
    </Container>
  );
}