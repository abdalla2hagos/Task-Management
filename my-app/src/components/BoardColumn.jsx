import React, {useState} from 'react'
import { nanoid } from 'nanoid'

function BoardColumn(props){
    return(
        <>
        <div className='flex--flow'>
            <input className='fs--0-875 text--input' type='text' name='addBoardColumn' placeholder='e.g. Doning'   onChange={props.handleColumnChange}/>
            <button className='removeItemIcon' onClick={props.removeColumnInput}>
                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
            </button>
        </div>
        </>
    )
}

export default BoardColumn