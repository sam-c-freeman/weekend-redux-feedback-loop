import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

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
        <Card sx={{ maxWidth: 350 }} className="card">
            <CardContent>
                <p>Thank you!  Your feedback was submitted!</p>
                <Button variant="outlined" onClick={startAgain}>Leave New Feedback</Button>
            </CardContent>
        </Card>
    )
}

export default ConfirmPage;