import React, { FC } from 'react'
import Form from './Form/Form'

const Main:FC = () =>{
    return(
        <main className='border-default padding-25'>
            <Form type={{radio: 'Accordions'}} />
            <Form type={{radio: 'Input'}}/>
        </main>
    )
}

export default Main;