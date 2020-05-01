import React, {useState} from 'react';

const Contact = () => {
    const [username, setUsername] = useState("");

    function mySubmitHandler(event){
        event.preventDefault();
        alert("You are submitting " + username);
    }
    function myChangeHandler(event){
        this.setUsername(event.target.value);
    }

    return (
        <div>
            <h1 id="title">Register and watch what you want!</h1>
            <form onSubmit={mySubmitHandler}>
                <h1>Hello {username}</h1>
                <p>Enter your name, and submit:</p>
                <input
                    type='text'
                    onChange={myChangeHandler}
                />
                <input
                    type='submit'
                />
            </form>

        </div>
    );
}
export default Contact;

