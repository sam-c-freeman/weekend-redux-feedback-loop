import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Importing Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//Reducers

const feelingRating = (state=[], action) =>{
    if(action.type === 'SET_FEELING'){
        return Number(action.payload);
        //Number right approach for DB?
    }
    if(action.type === 'CLEAR'){
        return [];
        
    }
        return state;
}

const understandingRating = (state=[], action) =>{
    if(action.type === 'SET_UNDERSTANDING'){
        return Number(action.payload);
        
    }
    if(action.type === 'CLEAR'){
        return [];
        
    }
        return state;
}

const supportedRating = (state=[], action) =>{
    if(action.type === 'SET_SUPPORTED'){
        return Number(action.payload);
        
    }
    if(action.type === 'CLEAR'){
        return [];
        
    }
        return state;
}

const comments = (state=[], action) =>{
    if(action.type === 'SET_COMMENTS'){
        return action.payload;
        
    }
    if(action.type === 'CLEAR'){
        return [];
        
    }
        return state;
}

const feedback = (state=[], action) => {
    if(action.type === 'GET_FEEDBACK'){
        return action.payload
    }
        return state;
}



//Create Store
const storeInstance = createStore(
    combineReducers(
        {
            feelingRating,
            understandingRating,
            supportedRating,
            comments,
            feedback
        }
    ),
    applyMiddleware(logger)
)

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
