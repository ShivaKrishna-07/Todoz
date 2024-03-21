import { useEffect, useState } from "react";
import { AppBar, Button, Box, Typography, styled, Input } from "@mui/material";
import { updateTask } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

const Navbar = styled(AppBar)`
  border: 1px solid rgb(59 74 89 / 30%);
  height: 80px;
  background: rgb(39 39 39);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled(Typography)`
  font-size: 40px;

  font-weight: bold;
`;

const Body = styled(Box)`
  height: 86.6vh;
  width: 100%;
  background: #101418;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled(Box)`
  border: 1px solid rgb(59 74 89 / 30%);
  height: 450px;
  width: 450px;
  color: #878787;
  border-radius: 20px;
  padding: 20px;
  background: #0c0e10;
`;

const Inp = styled(Input)`
  color: #ffffff;
  outline: none;
  width: 100%;
  border: 1px solid #878787;
  border-radius: 5px;
  height: 40px;
  padding: 5px 10px;
  margin-bottom: 30px;
`;
const Submit = styled(Button)`
  color: #2f8d46;
  outline: #2f8d46;
  border: 1px solid #2f8d46;
  margin: auto;
  float: right;
`;

export default function AddTask() {

  const navigate = useNavigate();

  const {id} = useParams();
  
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newDeadline, setNewDeadline] = useState("");

  useEffect(()=>{
    updateTodoData();
  }, [])

  const updateTodoData = async() => {
    let response = await updateTask(id);
    setTask(response.data.message);
    console.log(task);
  }
  
  return (
    <Box>
      <Navbar position="static">
        <Title>To Do List</Title>
      </Navbar>
      <Body>
        <InputBox>
          <Typography
            style={{
              fontSize: 40,
              fontWeight: "bold",
              textAlign: "center",
              paddingBottom: 20,
            }}
            level="h1"
          >
            Edit Task
          </Typography>
          <Typography style={{ fontWeight: "500", fontSize: 20 }}>
            Task
          </Typography>
          <Inp placeholder="Enter Task" variant="none" onChange={(e) => setNewTask(e.target.value)} />
          <Typography style={{ fontWeight: "500", fontSize: 20 }}>
            Status
          </Typography>
          <Inp placeholder="Enter Status" variant="none" value={task.status} onChange={(e) => setNewStatus(e.target.value)} />
          <Typography style={{ fontWeight: "500", fontSize: 20 }}>
            Deadline
          </Typography>
          <Inp
            type="datetime-local"
            sx={{ color: "#ffffff" }}
            placeholder="Enter Task"
            variant="none"
            onChange={(e) => setNewDeadline(e.target.value)}
          />
          <Submit variant="outlined">Add Task</Submit>
        </InputBox>
      </Body>
    </Box>
  );
}
