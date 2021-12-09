import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { updateActiveRadioAction } from '../../store/ActiveRadio/actions';
import { IActiveRadio } from '../../store/ActiveRadio/ActiveRadioTypes';
import Accordions from './Accordions/Accordions';
import Input from './Input';

type FormProps = {
    type: IActiveRadio,
}

const Form: FC<FormProps> = ({ type }) => {
    const dispatch = useDispatch();
    const activeRadio = useTypedSelector(state => state.activeRadio.active)

    const ChangeHandler = () => {
        dispatch(updateActiveRadioAction(type))
    }

    return (
        <div>
            <input checked={activeRadio.radio === type.radio ? true : false} onChange={()=>ChangeHandler()} type='radio' name='qwe' />
            <label htmlFor='radio'>{type.radio}</label>
            <div className={activeRadio.radio === type.radio ? 'margin-25 border-default' : 'margin-25 border-default disabled'}>
            {
                type.radio === 'Accordions' ?
                    <Accordions />
                    :
                    <Input />
            }
            </div>
        </div>
    )

}

export default Form;