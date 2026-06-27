import React from "react";
import "./StudentManager.css";

function StudentManager() {
    const [studentName, setStudentName] = React.useState("");
    const [studentAge, setStudentAge] = React.useState("");
    const [studentCourse, setStudentCourse] = React.useState("");
    const [students, setStudents] = React.useState([]);
    const [isEditing, setIsEditing] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing !== null) {
            const updatedStudents = students.map((student, index) =>
                index === isEditing ? { name: studentName, age: studentAge, course: studentCourse } : student
            );
            setStudents(updatedStudents);
            setIsEditing(null);
        } else {
            setStudents([...students, { name: studentName, age: studentAge, course: studentCourse }]);
        }
        setStudentName("");
        setStudentAge("");
        setStudentCourse("");
    };

    const handleEdit = (index) => {
        setIsEditing(index);
        const studentToEdit = students[index];
        setStudentName(studentToEdit.name);
        setStudentAge(studentToEdit.age);
        setStudentCourse(studentToEdit.course);
    };

    const handleDelete = (index) => {
        const newStudents = students.filter((_, i) => i !== index);
        setStudents(newStudents);
    };

    return (
        <div className="manager-container">
            <div className="form-card">
                <h1>Student Manager</h1>
                <p>Manage your students here.</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={studentName} onChange={(e) => setStudentName(e.target.value)} />

                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" value={studentAge} onChange={(e) => setStudentAge(e.target.value)} />

                    <label htmlFor="course">Course:</label>
                    <input type="text" id="course" name="course" value={studentCourse} onChange={(e) => setStudentCourse(e.target.value)} />

                    {isEditing !== null ? (
                        <button type="submit">Update Student</button>
                    ) : (
                        <button type="submit">Add Student</button>
                    )}
                </form>
            </div>

            <div className="student-list-card">
                <h2>Student List</h2>
                {students.length === 0 ? (
                    <p className="empty-message">No students added yet.</p>
                ) : (
                    <ul>
                        {students.map((student, index) => (
                            <li key={index}>
                                <p>{index + 1}. <strong>{student.name}</strong></p>
                                <p>({student.age} yrs) </p>
                                <p>{student.course}</p>
                                <p>
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default StudentManager;