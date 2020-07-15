import React from "react";


const Members = props => {
    return (
        <div className="member-list">
            {props.members.map((member, i) => (
                <div className="member" key={i}>
                    <span>Name: </span>
                    <span>{member.name}</span>
                    <br/>
                    <span>Role: </span>
                    <span>{member.role}</span>
                    <br/>
                    <span>Email: </span>
                    <span>{member.email}</span>
                </div>
            ))}
        </div>
    );
};

export default Members;
