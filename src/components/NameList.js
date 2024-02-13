import React from 'react'
import PersonList from './PersonList'

function NameList() {
    const names = ['Celina', 'Jeremi' , 'Nitanshi' , 'Celina']
    //  Index as Key Anti-pattern
    const  nameList = names.map((name , index ) => <h2 key={index}> {index} {name}</h2>)
    const persons = [
        {
            id : 1,
            name : 'Celina',
            age : 23,
            skill : 'React'
        },
        {
            id : 2,
            name : 'Hitanshu',
            age : 20,
            skill : 'Vue'
        },
        {
            id : 3,
            name : 'Jeremi',
            age : 18,
            skill : 'Angular'
        },
        {
            id : 4,
            name : 'Nitanshi',
            age : 17,
            skill : 'Java'
        }
    ]

    // Way 4:
    // const  personList = persons.map(person => (
    //     <h2> 
    //         I am {person.name}. I am {person.age} years old. I know {person.skill} 
    //     </h2>
    // ))


    // List and Key :
    //  const  personList = persons.map(person => <PersonList key ={person.id} person = {person} />) 
   
    // Way 5:
    // const  personList = persons.map(person => <PersonList person = {person} />) 
    
        return (
        
        <div> 
            {/* {personList} */}

            {/* Way 3: */}  
                { nameList}

            {/* Way 1:
                <h2> {names[0]} </h2>
                <h2> {names[1]} </h2>
                <h2> {names[2]} </h2>
            */}

            {/*  Way 2:
                names.map(name => <h2> {name} </h2>) 
            */}
           
        </div>
    )
}
export default NameList