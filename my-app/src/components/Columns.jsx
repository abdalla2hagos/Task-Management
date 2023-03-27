import React from 'react'
import Tasks from './Tasks'

function Columns(){
    return(
        <>
            <section>
                <div className='grayText--1'>
                    <h3 className='columnTitle fw--medium'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15" height="15" fill='var(--clr-purple-2)'><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>
                        ToDo (4)
                    </h3>
                    
                    <Tasks />
                    <Tasks />
                    <Tasks />
                    <Tasks />
                </div>
            </section>
        </>
    )
}

export default Columns