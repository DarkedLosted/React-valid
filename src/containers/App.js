import React, { Component } from 'react';
import  { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import '../App.css';

import usersReducer from '../reducers/users';
import SignInForm from '../components/SignInForm';
// import { SubmissionError } from 'redux-form';



class LogIn extends Component {
    submit = values => {

        console.log(values)
        store.dispatch({
            type:'USER_LOG_IN',
            login:values['login'],
            pass:values['password']
        });
        // throw new SubmissionError({
        //     login: 'Wrong login',
        //     password: 'Wrong password',
        //     _error: 'Login failed!'
        // });
    }
    render() {
        return <SignInForm onSubmit={this.submit} />
    }
}


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
          <LogIn/>
      </div>

        </Provider>
    );
  }
}

export default App;
