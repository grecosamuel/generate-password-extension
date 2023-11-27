import { useSelector, useDispatch } from 'react-redux';
import { FaCopy } from "react-icons/fa6";
import { setCopiedToClipboard, setErrorMsg } from '../reducers';
function PasswordOutput() {
    const output = useSelector( (state: any) => state.passwordOutput);
    const copied = useSelector( (state: any) => state.copiedToClipboard);
    const dispatch = useDispatch();

    function copyPassword() {
        try {
            navigator.clipboard.writeText(output);
            dispatch(setCopiedToClipboard(true));
        }
        catch(e) {
            dispatch(setErrorMsg('unable to copy, try again'))
        }
    }

    return(
        <>
        <p style={{fontWeight: 700, display: output === '' ? 'none' : 'block'}}> Your password <FaCopy onClick={copyPassword} style={{ cursor: 'pointer' }}/> </p>
        <p>{output}</p>
        <p style={{ fontSize: 14, display: copied ? 'block' : 'none' }}>Copied to clipboard</p>
        </>
    );
}

export default PasswordOutput;