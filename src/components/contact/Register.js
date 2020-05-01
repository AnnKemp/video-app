import React, {useState} from 'react';
import './form_style.css';

const Register = () => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(null);
// de bedoeling van dit gedoe is om de gegevens te registreren in mijn zelfgemaakte API en dan te gebruiken om in te loggen

    function mySubmitHandler(event){
        event.preventDefault();
        alert("You are submitting " + username);
    }
    function myChangeHandler(event){
        setUsername(event.target.value);// how can i give specifications here? get a specific value? or do i have to make all separate functions
        setAge(event.target.value);
        /* if (!Number(age)) {
            alert("Your age must be a number"); */ // still goes a little bit wild
       // }
    }
    return (
        <div id="register">
            <h3 id="title">Register and watch what all the movies you want!<br />For just 5 euro's a month!</h3>
            <form onSubmit={mySubmitHandler}>
                <h1>Hello {username}, you are {age}</h1>
                <p>Enter here your name and adress:</p>
                <input type='text' name='username' placeholder="Your name, please" onChange={myChangeHandler} />
                <p>Enter your age:</p>
                <input type='text' name='age' placeholder='Your age, please' onChange={myChangeHandler} />

                <input type='submit' value="Register" />
            </form>
        </div>
    );
}
export default Register;

