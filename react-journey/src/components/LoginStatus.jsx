import React from "react";

function Status() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    return (
        <div>
            <h1>{isLoggedIn ? "Welcome User" : "Please Login"}</h1>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    );
}

export default Status;