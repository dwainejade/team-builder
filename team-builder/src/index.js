import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import Members from "./components/Members";

function App() {
    const [members, setMembers] = useState([
        {
            id: 1,
            name:'Dwaine',
            role:'fake designer',
            email:'Dwaine@lambdastudents.com'
        }
    ]);

    const addNewMember = member => {
        const newMember = {
            id: Date.now(),
            name: member.name
        }
        setMembers([...members, newMember])
    }

    return (
        <div className="App">
            <Form addNewMember={addNewMember} />
            <Members members={members} />
            <h1>Team Members</h1>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);