import React, { Component } from 'react';
import  { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import '../App.css';
import usersReducer from '../reducers/users';
import SignInForm from '../components/SignInForm';

const reducer = combineReducers({
    users: usersReducer,
    form: formReducer
});


const store = createStore(reducer);

class App extends Component {
  render() {
    return (
        <Provider store={store}>

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Validation page</h1>
        </header>
        <p className="App-intro">
          Sign in Form
        </p>
          <SignInForm />
      </div>

        </Provider>
    );
  }
}

export default App;
