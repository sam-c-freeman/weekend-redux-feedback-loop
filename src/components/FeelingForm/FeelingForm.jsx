import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function FeelingForm (){
    const[feelingRating, setFeelingRating] = useState('');
    //what should default rating be?
    //How will I clear it?

    const dispatch = useDispatch();

    const handleNext = () =>{
        event.preventDefault();
        const action = {
            type: 'SET_FEELING',
            payload: feelingRating
        }
        dispatch(action);
        
    }

    return(
        <form onSubmit={handleNext}>
            <div className="radioButtons"  onChange={(event) => setFeelingRating(event.target.value)}>
                    <input type="radio" value="1" name="feeling"/> 1
                    <input type="radio" value="2" name="feeling"/> 2
                    <input type="radio" value="3" name="feeling"/> 3
                    <input type="radio" value="4" name="feeling"/> 4
                    <input type="radio" value="5" name="feeling"/> 5
            </div>
            <button>Next</button>
        </form>
    );
}

export default FeelingForm;