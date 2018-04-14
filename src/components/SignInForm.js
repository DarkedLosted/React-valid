import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Button from 'material-ui/Button';
import {FormControl ,FormHelperText} from 'material-ui/Form';
import TextField from  'material-ui/TextField';

let SignInForm = props => {

    const {  error, handleSubmit } = props;
    let errorText;
    return (

        <form onSubmit={handleSubmit}>
            <div>
                {/*<label>login</label>*/}

                <FormControl  >
                <Field name="login" component='text'>
                    <TextField error={ error ==="Wrong login!" } placeholder="Enter login" type="text" label="Login" />
                    <FormHelperText  error={ error ==="Wrong login!" ? errorText = error : errorText  = ""}> {errorText }</FormHelperText>
                </Field>
                </FormControl>
               {/*<span> {error && <strong>{error}</strong>}</span>*/}
            </div>
            <div>
                {/*<label>password</label>*/}
                {/*<Field  name="pass" component="input" type="password" />*/}
                <FormControl>
                <Field name="password" component='text'>
                <TextField  error={error ==="Wrong password!"} type="password" placeholder="Enter password" label="Password"/>
                    <FormHelperText  error={ error ==="Wrong password!" ? errorText = error : errorText = "" }>{errorText}</FormHelperText>
                </Field>
                </FormControl>
                {/*<span> {error && <strong>{error}</strong>}</span>*/}
            </div>
            <br/>
            <Button variant="raised" color="primary" type='sigin'>Sign In</Button>
        </form>
    )
}

SignInForm = reduxForm({
    form: 'signin'
})(SignInForm)

export default SignInForm