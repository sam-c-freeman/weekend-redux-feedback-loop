import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

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
        <Card sx={{ maxWidth: 350 }} className="card">
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <p>Any comments you want to leave? </p>
                        <input
                        type="text"
                        placeholder="Comments Go Here"
                        value={comments}
                        onChange={(event) => setComments(event.target.value)}/>
                        <Button variant="outlined">Next</Button>
                </form>
            </CardContent>
        </Card>
    
    );
}

export default CommentsForm;