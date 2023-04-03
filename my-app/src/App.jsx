import React, {useState, useRef} from 'react'
import Header from './components/Header'
import Main from './components/Main'
import EditBoardModal from './components/EditBoardModal'
import AddNewBoardModal from './components/AddNewBoardModal'
import AddNewTaskModal from './components/AddNewTaskModal'
import EditTaskModal from './components/EditTaskModal'
import TaskModal from './components/TasksModal'
import DeleteBoardModal from './components/DeleteBoardModal'
import DeleteTaskModal from './components/DeleteTaskModal'


function App() {
  // const [addColumnBeforeTask, setAddColumnBeforeTask] = useState()
  // when add task is clicked it wont work unless board is added
  const section = useRef()

  function checkColumn(){
    section.current
  }
  console.log(checkColumn)


  return (
   <>
    <Header />
    <Main ref={section}/>
    {/* <EditBoardModal /> */}
    <AddNewBoardModal />
    {/* <AddNewTaskModal /> */}
    {/* <EditTaskModal /> */}
    {/* <TaskModal /> */}
    {/* <DeleteBoardModal /> */}
    {/* <DeleteTaskModal /> */}
   </>
  )
}

export default App
