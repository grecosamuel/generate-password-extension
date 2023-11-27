import { useSelector, useDispatch } from 'react-redux';
import { FaCopy } from "react-icons/fa6";
import { setErrorMsg } from '../reducers';
function PasswordOutput() {
    const output = useSelector( (state: any) => state.passwordOutput);
    const dispatch = useDispatch();

    function copyPassword() {
        try {
            navigator.clipboard.writeText(output);
        }
        catch(e) {
            dispatch(setErrorMsg('unable to copy, try again'))
        }
    }

    return(
        <>
        <p style={{fontWeight: 700, display: output === '' ? 'none' : 'block'}}> Your password <FaCopy onClick={copyPassword} style={{ cursor: 'pointer' }}/> </p>
        <p>{output}</p>
        </>
    );
}

export default PasswordOutput;