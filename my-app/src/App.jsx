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
  return (
   <>
    {/* <EditBoardModal /> */}
    {/* <AddNewBoardModal /> */}
    <AddNewTaskModal />
    {/* <EditTaskModal /> */}
    {/* <TaskModal /> */}
    {/* <DeleteBoardModal /> */}
    {/* <DeleteTaskModal /> */}
    <Header />
    <Main />
   </>
  )
}

export default App
