import React, { FC } from 'react'

const Input:FC = () =>{
    return(
        <>
            <div className='input-text'>
                <label htmlFor='text'>Label for input:</label>
                <input type='text' id='text' />
            </div>
        </>
    )
}

export default Input;