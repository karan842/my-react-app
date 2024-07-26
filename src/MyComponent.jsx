import React, {useState} from 'react'


// We can create stateful variable
function MyComoponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Spongbob")
    }

    const incrementAge = () => {
        setAge(age + 2);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            
            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Is Employed</button>
        </div>
    )

}
export default MyComoponent