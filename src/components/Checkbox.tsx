import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
interface BoxInterface {
    boxname: string,
    boxlabel: string,
    boxid?: string,
    stateName: string,
    action: Function,
}

function Checkbox({boxname, boxlabel, stateName, action, boxid=boxname}:BoxInterface) {
    const dispatch = useDispatch();
    const value = useSelector( (state: any) => state[stateName]);

    const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(action(Boolean(!value)));
    };

    return(
        <div className='boxChild'>
            <button className={`${value ? 'active' : ''}`} id={boxid} onClick={handleChange}>{boxlabel}</button>
        </div>
    );
}

export default Checkbox;