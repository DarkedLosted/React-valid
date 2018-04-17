import React from 'react';
import {FormControl ,FormHelperText} from 'material-ui/Form';
import {Field} from 'redux-form';
import TextField from  'material-ui/TextField';

const LabelField = ({meta: { touched, error }, label, placeholder,type }) => ( 
    <FormControl>
        <Field name={label} component='text'>
        <TextField error={!!error} placeholder={placeholder} type={type} label={label} />
        {touched && error && <FormHelperText error={!!error} > {error }</FormHelperText>}
        </Field>
    </FormControl>
)

export default LabelField