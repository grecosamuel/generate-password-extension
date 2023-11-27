import { useDispatch, useSelector } from 'react-redux';
import { setCopiedToClipboard, setErrorMsg, setPasswordOutput } from '../reducers';

const chars = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+';
const upper = chars.toUpperCase();

function GenerateButton() {
    const state = useSelector( (state: any) => state);
    const dispatch = useDispatch();


    function generate() {
        if (state.passwordLength < 6) {
            dispatch(setErrorMsg('Length should to be at least 6'));
            return;
        }
        if (!state.includeNumbers && !state.includeSymbols && !state.includeLowercase && !state.includeUppercase) {
            dispatch(setErrorMsg('Select at least one box'));
            dispatch(setPasswordOutput(''));
            return;
        }

        if (state.errorMsg !== '') dispatch(setErrorMsg(''));

        let result = '', set = '';

        if (state.includeNumbers) {
            set += numbers;
            result += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }

        if (state.includeSymbols) {
            set += symbols;
            result += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }

        if (state.includeLowercase) {
            set += chars;
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        if (state.includeUppercase) {
            set += upper;
            result += upper.charAt(Math.floor(Math.random() * upper.length));
        }

        let maxIter = state.passwordLength - result.length;

        for (let i = 0; i < maxIter; i++) {
            const randomIndex = Math.floor(Math.random() * set.length);
            result += set.charAt(randomIndex);
        }
        
        result = result.split('').sort(() => Math.random() - 0.5 + Math.random() - 0.5).join('');

        dispatch(setPasswordOutput(result));
        if (state.copiedToClipboard) dispatch(setCopiedToClipboard(false));
    };

    return(
        <>
        <label className="error-msg" style={{ display: state.errorMsg === '' ? 'none' : 'inline'}}>{state.errorMsg}</label>
        <button className="generateButton" onClick={generate}>GENERATE</button>
        </>
    );
}

export default GenerateButton;