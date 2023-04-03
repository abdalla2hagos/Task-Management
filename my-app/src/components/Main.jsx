import React, {useRef} from 'react'
import Columns from './Columns'

function Main(){
    return(
        <>
            <main className='main'>
                <div className='wrapper '> 
                    <div className='flex--columns'>
                        {/* <Columns />
                        <Columns /> */}
                   </div>

                    <div className='emptyBoard'>
                        <p className='emptyBoard__title grayText--1 fw--bold'>This board is empty. Create a new column to get started.</p>
                        <button className='emptyBoard__addTask whiteText purpleBackground--1 fw--medium'>
                            <svg className='Plus--icon' width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#FFF" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"/></svg>
                             Add New Column
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main