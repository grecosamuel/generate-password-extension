import { useSelector } from 'react-redux';
function PasswordOutput() {
    const output = useSelector( (state: any) => state.passwordOutput);
    return(
        <>
        <p style={{fontWeight: 700, display: output === '' ? 'none' : 'block'}}> Your password </p>
        <p>{output}</p>
        </>
    );
}

export default PasswordOutput;