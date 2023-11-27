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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(action(Boolean(!value)));
    };

    return(
        <div className='boxChild'>
            <label htmlFor={boxid}> {boxlabel} </label>
            <input type="checkbox" name={boxname} id={boxid} checked={value} onChange={handleChange}/>        
        </div>
    );
}

export default Checkbox;