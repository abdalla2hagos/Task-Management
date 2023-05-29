import React, {useState, useRef, useEffect} from 'react'
import Header from './components/Header'
import Main from './components/Main'
import BoardTitle from './components/BoardTitle'
import BoardColumn from './components/BoardColumn'
import Columns from './components/Columns'
import {nanoid} from 'nanoid'
import {useForm} from 'react-hook-form'
import { boards } from './data/data'


function App(){
    const {register, handleSubmit, formState: {errors}} = useForm()
    
    //  initial state
    const [board, setBoard] = useState(boards)
    console.log(board)
//  handle board name onChange
    const [boardName, setBoardName] = useState()
  
    function handleBoarNamedChange(e){
        setBoardName(e.target.value)
        }

    function selectBoardName(id){
        // const boardItem = board.find((board, index) => id === index + 1)
        setBoard(prev => prev.map((board, index) => {
            return id === index + 1 ?
                {...board, isActive: !board.isActive} :
                board
            }))
            // setBoard(prev => prev.find((board, index) => id === index + 1).map(board => {
            //     return {...board, isActive: !board.isActive}
            // }) )
    }
    
    const title = board.map((board, index) => <BoardTitle key={index} title={board.name} selectBoardName={()=> selectBoardName(board.id)}/>)
    

    //  handle column input onChange
    const [columnInput, setColumnInput] = useState()

    //   add column input
    const [addColumnInput, setAddColumnInput] = useState([])

    //   add the column value to main
    const [addColumn, setAddColumn] = useState([])

    function handleColumnChange(e){
        setColumnInput(e.target.value)
    }

//   this fun can be used to prevent duplicate or undefiend
    function allNewColumn(){
        setAddColumnInput([...addColumnInput, {
            id: nanoid(),
            isRemoved: false
        }])
    }

    function removeColumnInput(id){
        setAddColumnInput(prev=> prev.map(input=> {
            return input.id === id ?
                {...input, isRemoved: !input.isRemoved} :
                input  
            }).filter(input=> !input.isRemoved)
        )
    }
    
    // iterate and add values to boardColumnInput
    const allColumnInput = addColumnInput.map((input, index)=> <BoardColumn key={index} removeColumnInput={()=> removeColumnInput(input.id)} isRemoved={input.isRemoved} handleColumnChange={(e)=> handleColumnChange(e)}/>)
    // iterate and add column to main
    const allColumn = addColumn.map((column, index)=> <Columns key={index} column={column}/>)

  
    function handleBoardSubmit(data, e){
        e.preventDefault()
        
        addNewBoardModal.current.close()
    
        setBoard(prev => [...prev, {
            id: board.length + 1,
            name:boardName,
            isActive: false,
            columns: []
        }])
        // reset boardName input
        setBoardName('')
        //  if columnInput array is empty dont add empty boardColumn to main
        if(!columnInput.length) return
        setAddColumn(prev => [...prev, columnInput]) 
    }

    const addNewBoardModal = useRef()
    function openAddNewBoardModal(){
        addNewBoardModal.current.showModal()
    }

    const deleteBoardModal = useRef()
    function openDeleteBoardModal(){
        deleteBoardModal.current.showModal()
    }

    function handleBoardDelete(){
        deleteBoardModal.current.close()
    }


  return (
   <>
    {/* <dialog className='dialog' aria-labelledby='modal_title3' id='dialog_addNewTask'> 
      <h2 className='modal--title fs-1-2 fw--bold' id='modal_title3'>Add New Task</h2>

      <form className='grid' onSubmit={handleFormSubmission}>

        <div className='grid--flow'>
            <label className='fw--bold grayText--1'>Title</label>
            <input className='fs--0-875' type='text' name='addTaskTitle' value={formData.addTaskTitle} onChange={handleForm} placeholder='e.g. Take coffee break'/>
        </div>

        <div className='grid--flow'>
            <label className='fw--bold grayText--1'>Description</label>
            <textarea className='fs--0-875' name="addTaskDesc" value={formData.addTaskDesc} onChange={handleForm} cols="30" rows="3" placeholder='e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'/>
        </div>

        <div>
            <label className='fw--bold grayText--1'>Subtasks</label>

            <div className='flex--flow'>
                <input className='fs--0-875 text--input' type='text' name='addSubtask1' value={formData.addSubtask1} onChange={handleForm} placeholder='e.g. Make coffe'/>
                <button className='removeItemIcon'>
                    <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
                </button>
            </div>

            <div className='flex--flow'>
                <input className='fs--0-875 text--input' type='text' name='addSubtask2' value={formData.addSubtask2} placeholder='e.g. Drink coffee & smile'/>
                <button className='removeItemIcon'>
                    <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
                </button>
            </div>

            <button className='light--Button purpleText--1 grayBackground--3 fw--bold addBtn'>
                <svg className='Plus--icon purpleText--1' width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="var(--clr-purple-1)" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"/></svg>
                Add New Subtask
            </button>
        </div>

        <div className='grid--flow'>
            <label className='fw--bold grayText--1'>Status</label>
            <select name="status" id="" value={formData.status} onChange={handleForm}>
                <option value="Doing">Doing</option>
                <option value="ToDo">ToDo</option>
            </select>
        </div>
      </form>

      <button className='dark--Button whiteText purpleBackground--1'>Create Task</button>
    </dialog> */}

    {/* <dialog ref={modal} className='dialog' aria-labelledby='modal_title4' id='dialog_editTask'> 
      <h2 className='modal--title fw--bold fs-1-2' id='modal_title4'>Edit Task</h2>

      <form className='grid'>

          <div className='grid--flow'>
              <label className='fw--bold grayText--1'>Title</label>
              <input className='fs--0-875' type='text' name='editTaskTitle' placeholder='e.g. Take coffee break'/>
          </div>

          <div className='grid--flow'>
              <label className='fw--bold grayText--1'>Description</label>
              <textarea className='fs--0-875' name="editTaskDesc" cols="30" rows="3" placeholder='e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'/>
          </div>

          <div>
              <label className='fw--bold grayText--1'>Subtasks</label>

              <div className='flex--flow'>
                  <input className='fs--0-875 text--input' type='text' name='editSubtask' placeholder='e.g. Make coffe'/>
                  <button className='removeItemIcon'>
                      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
                  </button>
              </div>

              <div className='flex--flow'>
                  <input className='fs--0-875  text--input' type='text' name='addSubtask' placeholder='e.g. Drink coffee & smile'/>
                  <button className='removeItemIcon'>
                      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
                  </button>
              </div>

              <button className='light--Button purpleText--1 grayBackground--3 fw--bold addBtn'>
                  <svg className='Plus--icon' width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="var(--clr-purple-1)" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"/></svg>
                  Add New Subtask
              </button>
          </div>
          
          <div className='grid--flow'>
              <label className='fw--bold grayText--1'>Status</label>
              <select name="" id="">
                  <option value="Doing">Doing</option>
                  <option value="ToDo">ToDo</option>
              </select>
          </div>
      </form>

      <button className='dark--Button whiteText purpleBackground--1'>Save Changes</button>

    </dialog> */}
    {/* <button onClick={openModal}>open modal</button> */}


    <dialog ref={addNewBoardModal} className='dialog' aria-labelledby='modal_title1' id='dialog1'> 
      <h2 className='modal--title fw--bold fs-1-2' id='modal_title1'>Add New Board</h2>

      <form className='grid' onSubmit={handleSubmit(handleBoardSubmit)}>

          <div className='grid--flow'>
              <label className='fw--bold grayText--1'>Board Name</label>
              <input {...register('boardName', {required: 'this is required'})}  className='fs--0-875' type='text' name='boardName' placeholder='e.g. Web Design' value={boardName} onChange={handleBoarNamedChange}/>
            <p>{errors.boardName?.message}</p>
          </div>

          <div>
              <label className='fw--bold grayText--1'>Board Columns</label>

              {/* <div className='flex--flow'>
                  <input className='fs--0-875 text--input' type='text' name='addBoardColumns1' placeholder='e.g. ToDo' value={addNewBoardForm.addBoardColumns1} onChange={handleBoardChange}/>
                  <button className='removeItemIcon'>
                      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
                  </button>
              </div> */}

                {allColumnInput}

              <button onClick={allNewColumn} type='button' className='light--Button purpleText--1 grayBackground--3 fw--bold addBtn'>
                  <svg className='Plus--icon purpleText--1' width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="var(--clr-purple-1)" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"/></svg>
                  Add New Column
              </button>
          </div>

            <button className='dark--Button whiteText purpleBackground--1'>Create New Board</button>
      </form>

        
    </dialog>


    {/* <dialog ref={modal} className='dialog' aria-labelledby='modal_title2' id='dialog_editBoard'> 
      <h2 className='modal--title fw--bold fs-1-2' id='modal_title2'>Edit Board</h2>

      <form className='grid'>

          <div className='grid--flow'>
              <label className='fw--bold grayText--1'>Board Name</label>
              <input className='fs--0-875' type='text' name='editBoardName' placeholder='e.g. Web Design'/>
          </div>

          <div>
              <label className='fw--bold grayText--1'>Board Columns</label>

              <div className='flex--flow'>
                  <input className='fs--0-875 text--input' type='text' name='editBoardColumns' placeholder='e.g. ToDo'/>
                  <button className='removeItemIcon'>
                      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
                  </button>
              </div>

              <div className='flex--flow'>
                  <input className='fs--0-875 text--input' type='text' name='editBoardColumns' placeholder='e.g. Doning'/>
                  <button className='removeItemIcon'>
                      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
                  </button>
              </div>

              
              <button className='light--Button purpleText--1 grayBackground--3 fw--bold addBtn'>
                  <svg className='Plus--icon purpleText--1' width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="var(--clr-purple-1)" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"/></svg>
                  Add New Column
              </button>
          </div>
      </form>

      <button className='dark--Button whiteText purpleBackground--1'>Save Changes</button>
    </dialog>
    <button onClick={openModal}>open modal</button> */}


    {/* <dialog ref={modal} className='dialog'>
      <div className='grid--tasks'>
          <div className='flex--title'>
              <h3 className='modal--title fw--bold fs-1-2'>Reaserch pricing points of various competitiors and trial different models</h3>
              
              <button className='ellipsis'>
                  <svg className='ellipsis__Icon' width="5" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><circle cx="2.308" cy="2.308" r="2.308"/><circle cx="2.308" cy="10" r="2.308"/><circle cx="2.308" cy="17.692" r="2.308"/></g></svg>

                  <div className='edit whiteBackground'>
                      <button className='grayText--1'>Edit Board</button>
                      <button className='orangeText--1'>Delete Board</button>
                  </div>
              </button>
            </div>

            <p className='grayText--1'>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Totam corporis autem repellendus molestias, quo fuga cum blanditiis numquam repellat veritatis!
            </p>  

            <form className='grid--tasks'>

                  <div>
                    <label className='fw--bold grayText--1'>Subtasks (2 of 3)</label>

                    <div  className='tasks grayBackground--3'>
                        <input type="checkbox" id='taskNo1' name='taskNo1'/>
                        <label htmlFor='taskNo1'> Reaserch competitiors</label>
                    </div>

                    <div className='tasks grayBackground--3'>
                        <input type="checkbox" id='taskNo2' name='taskNo2'/>
                        <label htmlFor='taskNo2'>Outline a business modal that works</label>
                    </div>

                    <div className='tasks grayBackground--3'>
                        <input type="checkbox" id='taskNo3' name='taskNo2'/>
                        <label htmlFor='taskNo3'>Outline a business modal that works</label>
                    </div>
                </div>
                
                <div className='grid--flow'>
                    <label className='fw--bold grayText--1'>Current Status</label>
                    <select name="" id="">
                        <option value="Doing">Doing</option>
                        <option value="ToDo">ToDo</option>
                    </select>
                </div>
            </form>
      </div>
    </dialog>
    <button onClick={openModal}>open modal</button> */}

    <dialog ref={deleteBoardModal} className='dialog' aria-labelledby='modal_title15' id='dialog_deleteBoard'>
        <h2 className='modal--title orangeText--1 fs-1-2 fw--bold' id='modal_title5'>Delete this board?</h2>

        <p className='modal--text grayText--1'>Lorem, ipsum dolor sit amet consectetur 
        adipisicing elit. Est suscipit reprehenderit amet eveniet hic at nulla incidunt debitis dolorem provident?
        </p>

        <div className='flex--delete fw--medium'>
            <button onClick={handleBoardDelete} className='deleteBtn whiteText orangeBackground--1'>Delete</button>
            <button className='cancelBtn purpleText--1'>Cancel</button>
        </div>
    </dialog>


    {/* <EditBoardModal /> */}
    {/* <AddNewBoardModal /> */}
    {/* <AddNewTaskModal /> */}
    {/* <EditTaskModal /> */}
    {/* <TaskModal /> */}
    {/* <DeleteBoardModal />
    <DeleteTaskModal /> */}
    <Header openAddNewBoardModal={()=> openAddNewBoardModal()} openDeleteBoardModal={()=> openDeleteBoardModal()} title={title}/>
    <Main allColumn={allColumn}/>
   </>
  )
}

export default App
