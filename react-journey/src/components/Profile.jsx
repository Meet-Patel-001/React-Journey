import React from "react";
import './Profile.css';

function Profile({name , role , age }) {
    return (
        <>
            <div className="profile">
                Name: {name}<br />
                Role: {role} <br />
                Age: {age}<br />
            </div>
        </>
    );
}

export default Profile;