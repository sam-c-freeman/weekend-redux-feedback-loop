import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function SupportedForm (){
    const[supportedRating, setSupportedRating] = useState('');
    //what should default rating be?
    //How will I clear it?

    const dispatch = useDispatch();

    const submit = () =>{
        event.preventDefault();
        const action = {
            type: 'SET_SUPPORTED',
            payload: supportedRating
        }
        dispatch(action);
        
    }

    const handleChange = (event) => {
        setSupportedRating(event.target.value);
    }

    const resetRadioButtons = () => {
        submit();
        setSupportedRating('');
    }

    return(
        <form>
            <p>How well are you being supported?</p>
                <div className="radioButtons"  onChange={(event) => setSupportedRating(event.target.value)}>
                        <input 
                            type="radio" 
                            value="1" 
                            checked={supportedRating === '1'}
                            onChange={handleChange}
                            name="supported"/> 1
                        <input 
                            type="radio" 
                            value="2"
                            checked={supportedRating === '2'}
                            onChange={handleChange} 
                            name="supported"/> 2
                        <input 
                            type="radio" 
                            value="3" 
                            checked={supportedRating === '3'}
                            onChange={handleChange}
                            name="supported"/> 3
                        <input 
                        type="radio" 
                        value="4" 
                        checked={supportedRating === '4'}
                        onChange={handleChange}
                        name="supported"/> 4
                        <input 
                        type="radio" 
                        value="5" 
                        checked={supportedRating === '5'}
                        onChange={handleChange}
                        name="supported"/> 5
                </div>
                <button type="reset" onClick={resetRadioButtons}>Next</button>
    </form>
    );
}

export default SupportedForm;