import React,{useState,} from 'react';
import FormInput from "./FormInput";
import {Form} from "formik";
import ReactSelect from "./ReactSelect/ReactSelect";
import ReactSelectComponent from "./ReactSelect/ReactSelectComponent";
import {companyIndustry, companySector, companySize, jobFields, jobLocation, jobTitles, } from '../Utils/Constants';

function CustomForm ({ errors, touched,values }) {
    const [isDateFocus, setIsDateFocus]= useState(false);

    return (
        <Form className='CustomForm'>
            <h2>Job Details</h2>
            <ReactSelect 
                as={ReactSelectComponent}
                name='jopTitle'
                type={jobFields}
                placeholder='Jop Field'
            />

            <ReactSelect 
                as={ReactSelectComponent}
                name='jobFields' 
                type={jobTitles} 
                placeholder='Jop Title'
            />

            <ReactSelect 
                as={ReactSelectComponent}
                name='jobLocation'
                type={jobLocation}
                placeholder='Jop Loacation'
            />

            <FormInput
                type="date"
                isDate={true}
                name={"startDate"}
                placeholder={"start Date"}
                touched={touched}
                errors={errors}
                isDateFocus={isDateFocus}
                setIsDateFocus={setIsDateFocus}
            />
            {!values.isCurrentlyWork && <FormInput
                type="date"
                isDate={true}
                name={"endDate"}
                placeholder={"end Date"}
                touched={touched}
                errors={errors}
                isDateFocus={isDateFocus}
                setIsDateFocus={setIsDateFocus}
            />}
            <FormInput
                type={'checkbox'}
                name={"isCurrentlyWork"}
                placeholder={"isCurrentlyWork"}
                touched={touched}
                errors={errors}
                label={'Currently Work There'}
            />
            <FormInput
                component="textarea"
                name={"describtion"}
                placeholder={"Description"}
                touched={touched}
                errors={errors}
            />

            <h2>Company Details</h2>
           
            <FormInput
                type={'text'}
                name={"companyName"}
                placeholder={"Company Name"}
                touched={touched}
                errors={errors}
            />
            <FormInput
                type={'text'}
                name={"companyAddress"}
                placeholder={"Company Address"}
                touched={touched}
                errors={errors}
            /> 

             <ReactSelect 
                as={ReactSelectComponent}
                name='companyIndustry'
                type={companyIndustry}
                placeholder='Company Industry'
            />
             <ReactSelect 
                as={ReactSelectComponent}
                name='companySize'
                type={companySize}
                placeholder='Company Size'
            />
            <ReactSelect 
                as={ReactSelectComponent}
                name='companySector'
                type={companySector}
                placeholder='Company Sector'
            />
             
            <FormInput
                type={'text'}
                name={"superviseName"}
                placeholder={"supervise Name"}
                touched={touched}
                errors={errors}
            />
            <FormInput
                type={'number'}
                name={"numberOfEmployees"}
                placeholder={"# Number Of Employees"}
                touched={touched}
                errors={errors}
            />
            {!values.isCurrentlyWork &&<FormInput
                type={'text'}
                name={"reasonOfLeaving"}
                placeholder={"Reason Of Leaving"}
                touched={touched}
                errors={errors}
            /> }
            
            <button type={'submit'}>submit</button>
    </Form>
    )
}

export default CustomForm;