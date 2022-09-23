import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function UnderstandingForm (){
    const[understandingRating, setUnderstandingRating] = useState('');
    //what should default rating be?
    //How will I clear it?

    const dispatch = useDispatch();

    const submit = () =>{
        event.preventDefault();
        const action = {
            type: 'SET_UNDERSTANDING',
            payload: understandingRating
        }
        dispatch(action);
        
    }

    const handleChange = (event) => {
        setUnderstandingRating(event.target.value);
    }

    const resetRadioButtons = () => {
        submit();
        setUnderstandingRating('');
    }

    return(
        <form>
            <p>How well are you understanding the content?</p>
                <div className="radioButtons"  onChange={(event) => setUnderstandingRating(event.target.value)}>
                        <input 
                            type="radio" 
                            value="1" 
                            checked={understandingRating === '1'}
                            onChange={handleChange}
                            name="understanding"/> 1
                        <input 
                            type="radio" 
                            value="2"
                            checked={understandingRating === '2'}
                            onChange={handleChange} 
                            name="understanding"/> 2
                        <input 
                            type="radio" 
                            value="3" 
                            checked={understandingRating === '3'}
                            onChange={handleChange}
                            name="understanding"/> 3
                        <input 
                        type="radio" 
                        value="4" 
                        checked={understandingRating === '4'}
                        onChange={handleChange}
                        name="understanding"/> 4
                        <input 
                        type="radio" 
                        value="5" 
                        checked={understandingRating === '5'}
                        onChange={handleChange}
                        name="understanding"/> 5
                </div>
                <button type="reset" onClick={resetRadioButtons}>Next</button>
    </form>
    );
}

export default UnderstandingForm;