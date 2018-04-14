import React,{Component} from 'react';
import SignInForm from '../components/SignInForm';
import { SubmissionError } from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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

function mapStateToProps(state) {
    return {
        users: state.usersById
    }
}

export default connect(mapStateToProps)(LogIn);