import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';

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
    
console.log(feedbackObject);
    return(

       <>
        <p>Feeling: {feeling}</p>
        <p>Understanding: {understanding}</p>
        <p>Support: {supported}</p>
        <p>Comments: {comments}</p>
        <button>Submit</button>

        </>

        //Return to home button
    )
}

export default Review;