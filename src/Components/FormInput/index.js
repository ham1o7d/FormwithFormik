import {Field} from "formik";

function FormInput({
        type,
        isDate,
        name,
        placeholder,
        errors,
        touched,
        label,
        isDateFocus,
        setIsDateFocus,
        component='input',
 }) {
    
    return (
        <div>
            {label && <label htmlFor={name} style={{color: 'white', fontSize: '14px'}}> {label}</label>}
            <Field
                onFocus={()=> isDate? setIsDateFocus(true) : null} 
                type={ !isDate ? type : isDateFocus ? 'date' : 'text' }
                name={name}
                
                placeholder={placeholder}
                component={component}
                className={component ==='textarea' ? 'textArea' : 'margin'}
            />
            {errors[name] && touched[name]
            &&<div className={'error'}>{errors[name]}</div>}
        </div>
    );
}

export default FormInput;