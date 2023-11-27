import { useSelector, useDispatch } from 'react-redux';
import { setPasswordLength } from '../reducers';
function PasswordLength() {

    const length = useSelector( (state: any) => state.passwordLength);
    const dispatch = useDispatch();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        dispatch(setPasswordLength(value));
    };
    
    
    return(
        <div className="passwordlengthContainer">
            <label htmlFor="passwordLengthInput">Password length</label>
            <input type="number" value={length} id="passwordLengthInput" onChange={handleInputChange}/>
        </div>
    );
}

export default PasswordLength;