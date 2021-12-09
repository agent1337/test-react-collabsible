import React, { FC } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Accordion from './Accordion';

const Accordions: FC = () => {
    const accordions = useTypedSelector(state => state.accordions.accordions);
    
    return (
        <>
            <ul>
                {
                    accordions.map(item =>
                        <li key={item.id}>
                            <Accordion item={item} />
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Accordions;