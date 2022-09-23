import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function ConfirmPage () {
    const history = useHistory();
    const dispatch = useDispatch();

    const startAgain = () =>{
        const action = {
            type: 'CLEAR'
        }
        history.push('/');
        dispatch(action);
    }
  
    return(
        <button onClick={startAgain}>Leave New Feedback</button>
    )
}

export default ConfirmPage;