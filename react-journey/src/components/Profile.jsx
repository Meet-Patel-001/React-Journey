import React from "react";

function Profile({ course }) {
    const name = "John Doe";
    return (
        <>
            <div className="profile">
                name: {name}<br />
                role: {course} Learning<br />
            </div>
        </>
    );
}

export default Profile;