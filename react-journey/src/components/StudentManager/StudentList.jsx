import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students, handleEdit, handleDelete }) {
    return (
        <div className="student-list-card">
            <h2>Student List</h2>
            {students.length === 0 ? (
                <p className="empty-message">No students added yet.</p>
            ) : (
                <ul>
                    {students.map((student, index) => (
                        <StudentCard
                            key={index}
                            student={student}   
                            index={index}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default StudentList;