import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Todo from './components/Todo'
import AddTask from './components/AddTask'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddTask/>}/>
          <Route path='/tasks' element={<Todo/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
