import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function CommentsForm (){
    const[comments, setComments] = useState('');
    //what should default rating be?
    //How will I clear it?

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () =>{
        event.preventDefault();
        const action = {
            type: 'SET_COMMENTS',
            payload: comments
        }
        dispatch(action);
        setComments('');
        history.push("/review");
        
    }


    return(
        <form onSubmit={handleSubmit}>
            <p>Any comments you want to leave? </p>
                <input
                type="text"
                placeholder="Comments Go Here"
                value={comments}
                onChange={(event) => setComments(event.target.value)}/>
                <button>Next</button>
    </form>
    );
}

export default CommentsForm;