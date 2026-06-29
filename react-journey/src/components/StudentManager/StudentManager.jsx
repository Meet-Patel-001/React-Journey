import React, { use } from "react";
import "./StudentManager.css";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function StudentManager() {
    const [studentName, setStudentName] = React.useState("");
    const [studentAge, setStudentAge] = React.useState("");
    const [studentCourse, setStudentCourse] = React.useState("");
    const [students, setStudents] = React.useState([]);
    const [isEditing, setIsEditing] = React.useState(null);
    const [error, setError] = React.useState("");
    const usernameRef = React.useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            studentName.trim() === "" ||
            studentCourse.trim() === "" ||
            studentAge <= 0
        ) {
            setError("Please fill in all fields.");
            usernameRef.current.focus();
            return;
        }
        const cleanName = studentName.trim().toLowerCase();

        const nameExists = students.some((student, index) => {
            if (isEditing !== null && index === isEditing) return false;
            return student.name.trim().toLowerCase() === cleanName;
        });

        if (nameExists) {
            setError("Name already exists.");
            usernameRef.current.focus();
            return;
        }
        setError("");
        if (isEditing !== null) {
            const updatedStudents = students.map((student, index) =>
                index === isEditing ? {
                    name: studentName,
                    age: studentAge,
                    course: studentCourse
                } : student
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
        setError("");
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
            <StudentForm
                studentName={studentName}
                usernameRef={usernameRef}
                studentAge={studentAge}
                studentCourse={studentCourse}
                isEditing={isEditing}
                error= {error}
                handleSubmit={handleSubmit}
                setStudentName={setStudentName}
                setStudentAge={setStudentAge}
                setStudentCourse={setStudentCourse}
            />

            <StudentList
                students={students}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default StudentManager;