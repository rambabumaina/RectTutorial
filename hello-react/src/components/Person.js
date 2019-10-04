import React from 'react'

function Person({person}) {
    return (
        <div>
            <h1>i am {person.employee_name}. My salary is {person.employee_salary} </h1>
        </div>
    )
}

export default Person
