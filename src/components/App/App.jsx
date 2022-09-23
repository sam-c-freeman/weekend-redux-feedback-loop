import React from 'react';
import axios from 'axios';
import './App.css';

//Import Router
// Router 
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

//Import components
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportedForm from '../SupportedForm/SupportedForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import Review from '../Review/Review';
import ConfirmPage from '../ConfirmPage/ConfirmPage';
import Admin from '../Admin/Admin';

function App() {



  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route exact path="/">
          <FeelingForm />
        </Route>
        <Route exact path="/understanding">
          <UnderstandingForm/>
        </Route>
        <Route exact path="/supported">
          <SupportedForm />
        </Route>
        <Route exact path="/comments">
          <CommentsForm />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/confirm">
          <ConfirmPage />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Router>

    </div>
  );
}

export default App;
