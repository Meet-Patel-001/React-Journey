import React from "react";

function StudentCard({ student, index, handleEdit, handleDelete }) {
    return (
        <div className="student-card">
            <li key={index}>
                            <p>{index + 1}. <strong>{student.name}</strong></p>
                            <p>({student.age} yrs) </p>
                            <p>{student.course}</p>
                            <p>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </p>
                        </li>
        </div>
    );
}   
export default StudentCard;