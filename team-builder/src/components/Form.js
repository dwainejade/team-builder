import React, { useState } from "react";

const Form = props => {

    const [input, setInput] = useState({
        name: '',
        role: '',
        email: ''
    })

    const changeHandler = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    }

    console.log(input)

    return (
        <form onSubmit={ 
            (event) => {
                event.preventDefault();
                props.addNewMember(input);
                setInput({name:'', role:'', email:''});
            }}>

            <input
                onChange={changeHandler}
                type="text"
                name="name"
                value={input.name}
                placeholder="name"
            />
            <br />
            <input
                onChange={changeHandler}
                type="text"
                name="role"
                value={input.role}
                placeholder="role"
            />
            <br />
            <input
                onChange={changeHandler}
                type="text"
                name="email"
                value={input.email}
                placeholder="email"
            />
            <br/>
            <button type="submit">Add Team Member</button>
        </form>
    );
};

export default Form;
