import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function UnderstandingForm (){
    const[understandingRating, setUnderstandingRating] = useState('');
    //what should default rating be?
    //How will I clear it?

    const dispatch = useDispatch();
    const history = useHistory();

    const submit = () =>{
        event.preventDefault();
        if(understandingRating === ''){
            alert('You must select a value!')
        } 
        else {
        const action = {
            type: 'SET_UNDERSTANDING',
            payload: understandingRating
        }
        dispatch(action);
        history.push("/supported");
        
    }
}

    const handleChange = (event) => {
        setUnderstandingRating(event.target.value);
    }

    const resetRadioButtons = () => {
        submit();
        setUnderstandingRating('');
    }

    return(
        <Card sx={{ maxWidth: 350 }} className="card">
            <CardContent>
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
                        <Box className="button">
                            <Button variant="outlined" type="reset" size="small" onClick={resetRadioButtons}>Next</Button>
                        </Box>
                </form>
         </CardContent>
        </Card>
    );
}

export default UnderstandingForm;