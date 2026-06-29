import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students, handleEdit, handleDelete }) {

    const [searchTerm, setSearchTerm] = React.useState("");
    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="student-list-card">
            <h2>Student List</h2>
            {students.length === 0 ? (
                <p className="empty-message">No students added yet.</p>
            ) : (
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            )}
            {filteredStudents.length > 0 && (
                <ul>
                    {filteredStudents.map((student, index) => (
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