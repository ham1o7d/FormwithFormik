import {useFormik} from 'formik'
import {workExperince} from "../Utils/Validation/workExperince";


const ReactForm=()=> {
    
  const formik = useFormik({
    initialValues: {
      firstName: '',
    },
    validate:{workExperince},
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  
    return (
        <div>
            {/* <CustomForm formik={formik}/> */}
            <form onSubmit={formik.handleSubmit}>
              <input 
                name='firstName'
                id="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                placeholder={'first Name'}
              />
              { formik.errors.firstName && <p>formik.errors.jopTitle</p> }
              <button type='submit'>submit</button>
            </form>
        </div>
    );
}

export default ReactForm;