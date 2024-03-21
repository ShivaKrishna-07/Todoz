import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Todo from './components/Todo'
import AddTask from './components/AddTask'
import EditTask from './components/EditTask'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddTask/>}/>
          <Route path='/tasks' element={<Todo/>} />
          <Route path='/edit/:id' element={<EditTask/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
