import React from "react";

function UserForm() {
    const [username, setUsername] = React.useState("");

    return (
        <div>
            <h1>User Form</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <p>Username: {username} Welcome</p>
        </div>
    );
}

export default UserForm;