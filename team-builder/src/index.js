import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import Members from "./components/Members";

function App() {
    const [members, setMembers] = useState([
        {
            id: 1,
            name:'Dwaine',
            role:'Frontend',
            email:'Dwaine@lambdastudents.com'
        }
    ]);

    const addNewMember = member => {
        const newMember = {
            id: Date.now(),
            ...member
        }
        setMembers([...members, newMember])
    }

    return (
        <div className="App">
            <Form addNewMember={addNewMember} />
            <h1>Team Members</h1>
            <Members members={members} />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);