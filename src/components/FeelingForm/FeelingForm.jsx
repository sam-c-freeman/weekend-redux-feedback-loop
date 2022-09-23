import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function FeelingForm (){
    const[feelingRating, setFeelingRating] = useState('');
    //what should default rating be?
    //How will I clear it?

    const dispatch = useDispatch();
    const history = useHistory();

    const submit = () =>{
        event.preventDefault();
        const action = {
            type: 'SET_FEELING',
            payload: feelingRating
        }
        dispatch(action);
        history.push("/understanding");
    }

    const handleChange = (event) => {
        setFeelingRating(event.target.value);
    }

    const resetRadioButtons = () => {
        submit();
        setFeelingRating('');
    }

    return(
        <form>
        <p>How do you feel?</p>
            <div className="radioButtons"  onChange={(event) => setFeelingRating(event.target.value)}>
                    <input 
                        type="radio" 
                        value="1" 
                        checked={feelingRating === '1'}
                        onChange={handleChange}
                        name="feeling"/> 1
                    <input 
                        type="radio" 
                        value="2"
                        checked={feelingRating === '2'}
                        onChange={handleChange} 
                        name="feeling"/> 2
                    <input 
                        type="radio" 
                        value="3" 
                        checked={feelingRating === '3'}
                        onChange={handleChange}
                        name="feeling"/> 3
                    <input 
                    type="radio" 
                    value="4" 
                    checked={feelingRating === '4'}
                    onChange={handleChange}
                    name="feeling"/> 4
                    <input 
                    type="radio" 
                    value="5" 
                    checked={feelingRating === '5'}
                    onChange={handleChange}
                    name="feeling"/> 5
            </div>
            <button type="reset" onClick={resetRadioButtons}>Next</button>
    </form>
    );
}

export default FeelingForm;