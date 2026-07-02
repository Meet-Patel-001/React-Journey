import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students = [], handleEdit, handleDelete }) {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [sortOrder, setSortOrder] = React.useState("asc");

    const studentsWithOriginalIndex = students.map((student, originalIndex) => ({
        ...student,
        originalIndex,
    }));

    const filteredStudents = studentsWithOriginalIndex.filter((student) => {
        const name = student.name ? String(student.name).toLowerCase() : "";
        return name.includes(searchTerm.toLowerCase());
    });

    const sortedStudents = [...filteredStudents].sort((a, b) => {
        const nameA = a.name ? String(a.name).toLowerCase() : "";
        const nameB = b.name ? String(b.name).toLowerCase() : "";

        if (sortOrder === "asc") {
            return nameA.localeCompare(nameB);
        } else {
            return nameB.localeCompare(nameA);
        }
    });

    const isSystemEmpty = students.length === 0;
    const isSearchEmpty = sortedStudents.length === 0 && searchTerm.trim() !== "";

    return (
        <div className="student-list-card">
            <h2>Student List</h2>

            {isSystemEmpty ? (
                <div className="validation-state empty-system">
                    <span className="state-icon" aria-hidden="true">📂</span>
                    <p className="empty-message">No students added yet.</p>
                </div>
            ) : (
                <>
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search by name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            aria-label="Search students by name"
                        />
                    </div>

                    <div className="sort-container">
                        <label htmlFor="sortSelect" className="visually-hidden">Sort Students</label>
                        <select
                            id="sortSelect"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="sort-dropdown"
                        >
                            <option value="asc">Sort: A → Z</option>
                            <option value="desc">Sort: Z → A</option>
                        </select>
                    </div>

                    {searchTerm.trim() && (
                        <span className="results-count">
                            {sortedStudents.length} {sortedStudents.length === 1 ? 'result' : 'results'} found
                        </span>
                    )}

                    {isSearchEmpty ? (
                        <div className="validation-state no-results" role="alert">
                            <span className="state-icon" aria-hidden="true">🔍</span>
                            <p className="empty-message">No user found matching "{searchTerm}"</p>
                            <button className="clear-search-btn" onClick={() => setSearchTerm("")}>
                                Clear Search
                            </button>
                        </div>
                    ) : (
                        <ul className="student-list" role="list">
                            {sortedStudents.map((student, index) => (
                                <StudentCard
                                    key={student.id || index}
                                    student={student}
                                    index={student.originalIndex}
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}
                                />
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    );
}

export default StudentList;