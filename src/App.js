import React from 'react';
import { withFormik, Field, ErrorMessage, Form } from 'formik';

function MyForm(props) {
    const{
        handleSubmit,
        isSubmitting,
        isValid,
        errors,
        touched,
    } = props;
    return(
        <form onSubmit={handleSubmit}>
            <Field
                name="email"
                type="email"
            />
            <Field
                name="password"
                type="password"
            />
            <ErrorMessage name="password">
                {message => <div>{message}</div>}
            </ErrorMessage>
            <button
                type="submit"
                disabled={isSubmitting || !isValid}
            >Submit</button>
        </form>
    );
}

export default withFormik({
    mapPropsToValues(props){
        return{
            email:"",
            password:'',
        };
    },
    validate(values){
        const errors = {};
        if(!values.password){
            errors.password = 'Password is requeried';
        }else if(values.password.length < 8){
            errors.password = 'Password must be at least 8 characters';
        }
        return errors;
    },
    handleSubmit(values, formikBag){
        formikBag.setSubmitting(false);
        console.log(values);
    },
})(MyForm);