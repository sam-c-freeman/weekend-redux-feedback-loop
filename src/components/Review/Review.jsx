import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

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
        <p>Feeling: {feeling}</p>
        <p>Understanding: {understanding}</p>
        <p>Support: {supported}</p>
        <p>Comments: {comments}</p>
        <button onClick={sendFeedback}>Submit</button>

        </>

        //Return to home button
    )
}

export default Review;