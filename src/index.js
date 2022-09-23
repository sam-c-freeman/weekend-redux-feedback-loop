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
        //Number?
    }
        return state;
}




//Create Store
const storeInstance = createStore(
    combineReducers(
        {
            feelingRating,
        }
    ),
    applyMiddleware(logger)
)

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
