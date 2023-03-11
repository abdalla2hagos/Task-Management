import React from 'react'
import Tasks from './Tasks'

function Main(){
    return(
        <>
            <main className='main'>
                <div className='wrapper '> 
                   <Tasks />
                   <Tasks />

                    <div className='emptyBoard'>
                        <p className='emptyBoard__title'>This board is empty. Create a new column to get started.</p>
                        <button className='emptyBoard__addTask'>
                            <img className='Plus--icon' src="/icon-add-task-mobile.svg" alt="plus sign icon" />
                             Add New Column
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main