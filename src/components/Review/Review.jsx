import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

function Review () {
   const dispatch = useDispatch();
   const history = useHistory();

//pulling in reducer data   
   const feeling= useSelector(store => store.feelingRating);
   const understanding = useSelector(store => store.understandingRating);
   const supported = useSelector(store => store.supportedRating);
   const comments= useSelector(store => store.comments);


//create feedbackobject

const [feedbackObject, setFeedbackObject] = useState({
                                                feeling: feeling,
                                                understanding: understanding,
                                                support: supported,
                                                comments: comments
})

//POST route
const sendFeedback = () => {
    axios({
        method: 'POST',
        url: '/feedback',
        data: feedbackObject
    })
    .then((response) => {
        console.log('Post worked client side', response);
        history.push('/confirm');
        
    })
    .catch((error) => {
        console.log('Error in post route client side', error);
    })
};
    
console.log(feedbackObject);
    return(

       <>
       <Card sx={{ maxWidth: 350 }} className="card">
            <CardContent>
                <p>Feeling: {feeling}</p>
                <p>Understanding: {understanding}</p>
                <p>Support: {supported}</p>
                <p>Comments: {comments}</p>
                <Button variant="outlined"onClick={sendFeedback}>Submit</Button>
             </CardContent>
        </Card>

        </>

        //Return to home button
    )
}

export default Review;