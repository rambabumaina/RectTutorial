import React from 'react'

import Person from './Person'

export default function ListRendering() {
    const Persons = [
        {
            "id": "99003",
            "employee_name": "RIya",
            "employee_salary": "100,000",
            "employee_age": "15",
            "profile_image": ""
        },
        {
            "id": "99008",
            "employee_name": "Raghupal",
            "employee_salary": "10,000",
            "employee_age": "33",
            "profile_image": ""
        },
        {
            "id": "99011",
            "employee_name": "Narendra",
            "employee_salary": "100300",
            "employee_age": "343",
            "profile_image": ""
        }
    ]
    //always add key 
    const personList = Persons.map(person => <Person key ={person.id} person = {person} />)

    return (<div>{personList}</div>)
}
