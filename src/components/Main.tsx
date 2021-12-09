import React, { FC } from 'react'
import { ERadio } from '../store/ActiveRadio/ActiveRadioTypes';
import Form from './Form/Form'

const Main:FC = () =>{
    return(
        <main className='border-default padding-25'>
            <Form type={ERadio.Accordion} />
            <Form type={ERadio.Input}/>
        </main>
    )
}

export default Main;