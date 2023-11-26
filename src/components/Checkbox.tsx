import React from 'react';

interface BoxInterface {
    boxname: string,
    boxlabel: string,
    boxid?: string,
    className?: string
}

function Checkbox({boxname, boxlabel, boxid=boxname, className=boxname}:BoxInterface) {
    return(
        <div className='boxChild'>
            <label htmlFor={boxid}> {boxlabel} </label>
            <input type="checkbox" name={boxname} id={boxid}/>        
        </div>
    );
}

export default Checkbox;