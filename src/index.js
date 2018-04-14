import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

// import SignInForm from './components/SignInForm';
//
// class ContactPage extends React.Component {
//     submit = values => {
//
//         console.log(values)
//     }
//     render() {
//         return <SignInForm onSubmit={this.submit} />
//     }
// }
// function loginReducer(state, action) {
//     if(state === undefined) {
//         state = [];
//     }
//
//     if(action.type === 'SIGN_UP') {
//         var newState = state.concat([action.user]);
//         return newState;
//     }
//     return state;
// }
//

ReactDOM.render(<App />, document.getElementById('root'));

