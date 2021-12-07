import React,{useState,} from 'react';
import FormInput from "./FormInputs";
import ReactSelect from "./ReactSelect/ReactSelect";
import ReactSelectComponent from "./ReactSelect/ReactSelectComponent";
import {jobFields, jobLocation, jobTitles, } from './ReactSelect/Constants';

function CustomForm ({ errors, touched, formik }) {
    console.log(formik, 'formik')
    const [isDateFocus, setIsDateFocus]= useState(false);

    return (
        <form onSubmit={formik.handleSubmit}>

        <ReactSelect as={ReactSelectComponent} name='jopTitle' type={jobFields} placeholder='Jop Field' />

        <ReactSelect as={ReactSelectComponent} name='jobFields' type={jobTitles} placeholder='Jop Title' />

        <ReactSelect as={ReactSelectComponent} name='jobLocation' type={jobLocation} placeholder='Jop Loacation' />

            <input
                type="text"
                name={"startDate"}
                placeholder={"start Date"}
                touched={touched}
                errors={errors}
                onChange={formik.handleChange}
                value={formik.values.jopTitle}
            />
            {formik.errors.firstName && <div style={{color: 'red'}}>{formik.errors.firstName}</div> }

            {/* <FormInput
                type="date"
                isDate={true}
                name={"endDate"}
                placeholder={"end Date"}
                touched={touched}
                errors={errors}
                isDateFocus={isDateFocus}
                setIsDateFocus={setIsDateFocus}
            />
            <FormInput
                type={'checkbox'}
                name={"isCurrentlyWork"}
                placeholder={"ahmedTerms"}
                touched={touched}
                errors={errors}
                label={'Currently Work There'}
            />
            <FormInput
                component="textarea"
                name={"description"}
                placeholder={"Description"}
                touched={touched}
                errors={errors}
                label={'Description'}
            />
             */}
            <button type={'submit'}>submit</button>
    </form>
    )
}

export default CustomForm;