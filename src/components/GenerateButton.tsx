import { useDispatch, useSelector } from 'react-redux';

function GenerateButton() {
    const state = useSelector( (state: any) => state);

    function generate() {
        
    };

    return(
        <>
        <button className="generateButton" onClick={generate}>GENERATE</button>
        </>
    );
}

export default GenerateButton;