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
        return state;
}

const understandingRating = (state=[], action) =>{
    if(action.type === 'SET_UNDERSTANDING'){
        return Number(action.payload);
        
    }
        return state;
}

const supportedRating = (state=[], action) =>{
    if(action.type === 'SET_SUPPORTED'){
        return Number(action.payload);
        
    }
        return state;
}



//Create Store
const storeInstance = createStore(
    combineReducers(
        {
            feelingRating,
            understandingRating,
            supportedRating
        }
    ),
    applyMiddleware(logger)
)

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
