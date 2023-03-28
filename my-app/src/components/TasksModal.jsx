import React, {useRef} from 'react'

function TaskModal(){

    const modal = useRef()

    function openModal(){
        modal.current.showModal()
    }

    return(
        <>
            <dialog ref={modal} className='dialog'>
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
            <button onClick={openModal}>open modal</button>
        </>
    )
}


export default TaskModal