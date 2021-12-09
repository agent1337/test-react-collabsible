import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import { updateAccordionAction } from '../../../store/Accordions/actions';
import { IAccordion } from '../../../store/Accordions/AccordionTypes';

type AccordionProps = {
    item: IAccordion;
}

const Accordion: FC<AccordionProps> = ({ item }) => {
    const dispatch = useDispatch();

    const ClickHandler = () => {
        if(item.active){
            item.active = false;
        }
        else{
            item.active = true;
        }
        
        dispatch(updateAccordionAction(item))
    }

    return (
        <div onClick={() => ClickHandler()} className='accordion'>
            <div className={!item.active ? 'border-radius-10' : 'border-radius-top-10'}>
                <p>{item.title}</p>
                <p>
                    {
                        !item.active ?
                        '˅' : '˄'
                    }
                </p>
            </div>
            <div className={!item.active ? 'display-none' : 'border-radius-bottom-10 display-flex'}>
                <p>{item.content}</p>
            </div>
        </div>
    )
}

export default Accordion;