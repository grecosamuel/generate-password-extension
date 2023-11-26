import { useState, ChangeEvent } from 'react';

function PasswordLength() {

    const [length, setLength] = useState<number>(16);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setLength(value);
    };
    
    
    return(
        <div className="passwordlengthContainer">
            <label htmlFor="passwordLengthInput">Password length</label>
            <input type="number" value={length} id="passwordLengthInput" onChange={handleInputChange}/>
        </div>
    );
}

export default PasswordLength;