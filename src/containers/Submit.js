import { SubmissionError } from 'redux-form';

function Submit(values) {
    console.log(values);
    alert('Log in successful!');
// return (
//      (function(){
    
//         if(!['123'].includes(values.login))
//         {
//             console.log("log");
//             // throw new SubmissionError({
//             //     password: 'Wrong login',
//             //     _error: 'Wrong login!'
//             //   });
              
//         } else if(!['123'].includes(values.password)) {
//             console.log("pass");
//             // throw new SubmissionError({
//             //     password: 'Wrong password',
//             //     _error: 'Wrong password!'
//             //   });
//         } else {
//             alert('Log in successful!');
//         }
    
//          }))();
}

export default Submit;