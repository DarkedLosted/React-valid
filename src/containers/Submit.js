import { SubmissionError } from 'redux-form';

function Submit(values) {
    console.log(values);
  
return (
     (function(){
    
        if(!['123'].includes(values.login))
        {
            console.log("log");
            throw new SubmissionError({
                password: 'Wrong login',
                _error: 'Wrong login!'
              });
              
        } else if(!['123'].includes(values.password)) {
            console.log("pass");
            throw new SubmissionError({
                password: 'Wrong password',
                _error: 'Wrong password!'
              });
        } else {
            alert('Log in successful!');
        }
    
         }))();
}


// class LogIn extends Component {
//     validation = values => {
//         const errors = {}

//             if(values.login)
//             {
//                 errors.login = 'Wrong login!';
//             }

//             if(values.password)
//             {
//                 errors.password = 'Wrong password!';
//             }
//             return errors;
//     }

//     submit = values => {

//         console.log(values)
//         // store.dispatch({
//         //     type:'USER_LOG_IN',
//         //     login:values['login'],
//         //     pass:values['password']
//         // });
//         // throw new SubmissionError({
//         //     login: 'Wrong login',
//         //     password: 'Wrong password',
//         //     _error: 'Login failed!'
//         // });
        

//         }
        
//     render() {
//         return <LabelField onSubmit={this.submit} />
//     }
// }

// function mapStateToProps(state) {
//     return {
//         users: state.usersById
//     }
// }

export default Submit;