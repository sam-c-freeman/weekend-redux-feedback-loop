import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
                <form>
                    <p>Any comments you want to leave? </p>
                        <TextField
                        type="text"
                        multiline
                        rows={3}
                        placeholder="Comments Go Here"
                        value={comments}
                        onChange={(event) => setComments(event.target.value)}/>
                        <Box className='button'>
                            <Button variant="outlined" size="small" onClick={handleSubmit}>Next</Button>
                        </Box>
                </form>
            </CardContent>
        </Card>
    
    );
}

export default CommentsForm;