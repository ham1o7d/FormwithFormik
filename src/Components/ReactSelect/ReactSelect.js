import React from 'react';
import {Field} from "formik";

function ReactSelect(props) {
    return (
        <Field>
            {({field: { value },
                  form:{
                        setFieldValue,
                        errors,
                        touched,
                        setFieldTouched
            }})=><>
                    {props.as({value, setFieldValue, setFieldTouched}, props.type, props.placeholder, props.name )}
                    {errors[props.name]&& touched[props.name] && <div className={'error'}>{errors[props.name]}</div>}
                </>}
        </Field>
    );
}

export default ReactSelect;