import { useDispatch, useSelector } from 'react-redux';
import { setErrorMsg, setPasswordOutput } from '../reducers';

const chars = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+';

function GenerateButton() {
    const state = useSelector( (state: any) => state);
    const dispatch = useDispatch();

    function getSet() {
        let set = '';
        if (state.includeNumbers) {
            set += numbers;
        }

        if (state.includeSymbols) {
            set += symbols;
        }

        if (state.includeLowercase) {
            set += chars;
        }

        if (state.includeUppercase) {
            set += chars.toUpperCase();
        }
        if (set === '') return null;
        return set;
    };

    function generate() {
        const set = getSet();
        
        if (!set) {
            dispatch(setErrorMsg('Select at least one box'));
            return;
        }

        let result = '';
        for (let i = 0; i < state.passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * set.length);
            result += set.charAt(randomIndex);
        }
        dispatch(setPasswordOutput(result));
    };

    return(
        <>
        <label className="error-msg" style={{ display: state.errorMsg === '' ? 'none' : 'inline'}}>{state.errorMsg}</label>
        <button className="generateButton" onClick={generate}>GENERATE</button>
        </>
    );
}

export default GenerateButton;