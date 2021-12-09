import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { updateActiveRadioAction } from '../../store/ActiveRadio/actions';
import { ERadio } from '../../store/ActiveRadio/ActiveRadioTypes';
import Accordions from './Accordions/Accordions';
import Input from './Input';

type FormProps = {
    type: ERadio,
}

const Form: FC<FormProps> = ({ type }) => {
    const dispatch = useDispatch();
    const activeRadio = useTypedSelector(state => state.activeRadio.active)

    const ChangeHandler = () => {
        dispatch(updateActiveRadioAction(type))
    }

    return (
        <div>
            <input checked={activeRadio === type} onChange={()=>ChangeHandler()} type='radio' name='qwe' />
            <label htmlFor='radio'>{ERadio[type]}</label>
            <div className={activeRadio === type ? 'margin-25 border-default' : 'margin-25 border-default disabled'}>
            {
                // type.radio === 'Accordions' ?
                //     <Accordions />
                //     :
                //     <Input />
            }
            {type === ERadio.Accordion &&
                <Accordions />
            }

            {type === ERadio.Input &&
                <Input />
            }
            </div>
        </div>
    )

}

export default Form;