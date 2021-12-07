import React from 'react'

const Formshow = ({id, title, startDate, endDate, deleteFunc, edit}) => {
    console.log(id, 'id');
    return (
        <div className='Formshow'>
            <p>{title} </p>
            <p> {startDate} - {!endDate ? ' Present ': endDate}</p>
            <button style={{border:'none', background: 'none', cursor:'pointer'}} onClick={()=> edit(id)}>edit</button>
            <button style={{border:'none', background: 'none', cursor:'pointer'}} onClick={()=>deleteFunc(id)} >delete</button>
        </div>
    )
}

export default Formshow
