import react from "react";

function UserList() {
    const users = ["Rahul",
        "Priya",
        "Amit",
        "John",
        "Sara"];
    return (
        <>
            <h1>User List</h1>
            {users.map((user, index) => (
                <div key={index}>
                    <h2>{user}</h2>
                </div>
            ))}
        </>
    );
}

export default UserList;