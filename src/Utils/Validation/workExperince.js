import * as yup from "yup";

function workExperince() {

    return yup.object({
        
        jopTitle:yup
            .string()
            .required("jopTitle required"),

        jobFields:yup
            .string()
            .required("jobFields required"),

        jobLocation:yup
            .string()
            .required("jobLocation required"),

        startDate:yup
        .date()
        .required('required'),
        
        endDate:yup
            .date().when('isCurrentlyWork',{
                is: true,
                then: yup.date(),
                otherwise: yup.date().min(yup.ref('startDate', 'end date must be more than start date')).required()
        }),

        isCurrentlyWork:yup
            .bool()
            .required('must be required'),

        companyName:yup
            .string()
            .required('required'),

        companyAddress:yup
        .string()
        .required('required'), 
        companyIndustry:yup
            .string()
            .required('required'),
        companySize:yup
            .string()
            .required('required'),
        companySector:yup
            .string()
            .required('required'),
        superviseName:yup
            .string()
            .required('required'),

        numberOfEmployees:yup
            .number()
            .integer('number must be integer')
            .required('required'),

        reasonOfLeaving:yup
            .string()
            .required('required'),

    })
}

export default workExperince

