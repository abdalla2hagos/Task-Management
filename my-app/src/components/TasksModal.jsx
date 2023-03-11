import React from 'react'

function TaskModal(){
    return(
        <>
            <dialog>
                <h3 className='modal--title'>Reaserch pricing points of various competitiors and trial different models</h3>
                <p className='light--text'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Totam corporis autem repellendus molestias, quo fuga cum blanditiis numquam repellat veritatis!
                </p>  
                <p>Subtasks (2 of 3)</p>

                <form>
                    <input type="checkbox" id='taskNo1' name='taskNo1'/>
                    <label htmlFor='taskNo1'> Reaserch competitiors</label>

                    <input type="checkbox" id='taskNo2' name='taskNo2'/>
                    <label htmlFor='taskNo1'>Outline a business modal that works</label>

                    <label>Current Status</label>
                    <select name="" id="">
                        <option value="Doing">Doing</option>
                        <option value="ToDo">ToDo</option>
                    </select>
                </form>
            </dialog>
        </>
    )
}


export default TaskModal