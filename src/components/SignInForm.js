import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Button from 'material-ui/Button';
import LabelField from './LabelField';
import submit from '../containers/Submit';
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

const styles  = {
    button: {
        color: '#fff',
        background: 'rgb(48,63,159)',
        'border-radius': '300px',
        'border-width': '4px',
        'border-style': 'solid',
        outline:'none',
		'left': '0',
		'top': '0',
		width: '50px',
		height: "50px",
		
    }
  }

const {classes} = jss.createStyleSheet(styles).attach();

let SignInForm = props => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <Field name='login' type='text' placeholder='Enter login' label='login' component={LabelField} />
            </div>
            <div>
                <Field name='password' type='password' placeholder='Enter password'  label='password' component={LabelField} />
            </div>
            <br/>
            <Button class={classes.button} type='submit'>Sign In</Button>
        </form>
    )
}

SignInForm = reduxForm({
    form: 'signin'
})(SignInForm)

export default SignInForm