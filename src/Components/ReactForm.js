import {Formik} from 'formik';
import { useEffect, useState } from 'react';
import {workExperince} from "../Utils/Validation";
import CustomForm from "./CustomForm";
import Formshow from './Formshow/Formshow';
import {v4} from 'uuid';

function ReactForm() {

    const [Forms, setForms]= useState([]);
    const [selectedForm, setSelectedForm]= useState({});
    


    useEffect(()=>{
        console.log(Forms, 'Forms')
        console.log(selectedForm, 'selectedForm')
    }, [Forms,selectedForm])

    const deleteFormHandler=(id)=> {
        const formsAfterDeleteing = Forms.filter(singleForm=> singleForm.id !== id )
        setForms([...formsAfterDeleteing])
    }  

    const editFormHandler= (id)=> {
        const seletctedFormm= Forms.find(singleForm=> singleForm.id === id)
        setSelectedForm(seletctedFormm)
    }
    return (
        <div className='container'>
            <div className='forms'>
                { Forms.length!==0 
                    ? Forms.map(singleForm=> 
                         <Formshow
                            id={singleForm.id}
                            title={singleForm.values.companyName}
                            startDate={singleForm.values.startDate}
                            endDate={singleForm.valuesendDate}
                            deleteFunc={deleteFormHandler}
                            edit={editFormHandler}
                        />)
                : <div className='warnings'>You must have at least one work experince!</div>
                }
            </div>
            {console.log(selectedForm)}
            <Formik
                initialValues={{
                    jopTitle: '', // Why I can't use selectedForm.values.jopTitle || ''  ???
                    jobFields: '', 
                    jobLocation: '',
                    describtion: '',
                    startDate: '',
                    endDate: '',
                    isCurrentlyWork: false,
                    companyName: '',
                    companyAddress: '',
                    companyIndustry: '',
                    companySize: '',
                    companySector: '',
                    superviseName: '',
                    numberOfEmployees: '',
                    reasonOfLeaving: ''
                }}
                onSubmit={(values) => {
                    setForms([
                        ...Forms,
                        {id:v4(), values:{ ...values}}
                    ])
                }}
                validationSchema={workExperince}
                children={CustomForm}
            >
            </Formik>
        </div>
    );
}

export default ReactForm;