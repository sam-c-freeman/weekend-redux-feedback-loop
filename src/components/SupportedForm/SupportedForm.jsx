import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function SupportedForm (){
    const[supportedRating, setSupportedRating] = useState('');
    //what should default rating be?
    //How will I clear it?

    const dispatch = useDispatch();
    const history = useHistory();

    const submit = () =>{
        event.preventDefault();
        if(supportedRating === ''){
            alert('You must select a value!')
        } 
        else {
        const action = {
            type: 'SET_SUPPORTED',
            payload: supportedRating
        }
        dispatch(action);
        history.push("/comments");
        
    }}

    const handleChange = (event) => {
        setSupportedRating(event.target.value);
    }

    const resetRadioButtons = () => {
        submit();
        setSupportedRating('');
    }

    return(
        <Card sx={{ maxWidth: 350 }} className="card">
            <CardContent>
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
                        <Box className="button">
                            <Button variant="outlined" type="reset" size="small" onClick={resetRadioButtons}>Next</Button>
                        </Box>
          </form>
        </CardContent>
    </Card>
    );
}

export default SupportedForm;