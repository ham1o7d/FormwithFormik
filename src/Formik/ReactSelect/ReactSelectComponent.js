import React from 'react';
import Select from "react-select";
// import {jobFields} from './Constants'

function ReactSelectComponent({setFieldTouched,value, setFieldValue  }, type, placeholder, name) {
    
    return (
        <Select
            onClick={()=>setFieldTouched(name, true)}
            className="basic-single"
            classNamePrefix="select"
            defaultValue={null}
            isSearchable={true}
            name={name}
            options={type}
            inputValue={value.value}
            placeholder={placeholder}
            onChange={(value)=>setFieldValue(name, value.value)}
        />
    );
}

export default ReactSelectComponent;