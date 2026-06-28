import React from "react";

function StudentForm({ studentName, studentAge, studentCourse, isEditing, handleSubmit, setStudentName, setStudentAge, setStudentCourse }) {
    return (
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
    );
}

export default StudentForm;