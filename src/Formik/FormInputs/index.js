
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
            <input
                onFocus={()=> isDate? setIsDateFocus(true) : null} 
                type={ !isDate ? type : isDateFocus ? 'date' : 'text' }
                name={name}
                placeholder={placeholder} autoComplete={'off'}
            />
            {errors[name] && touched[name]
            &&<div className={'error'}>{errors[name]}</div>}
        </div>
    );
}

export default FormInput;