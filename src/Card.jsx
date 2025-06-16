import {useState} from 'react';

function Card(){

    const [students, setStudents] = useState([
        {name: 'Alice', age: 20, grade: 'A'},
        {name: 'Bob', age: 22, grade: 'B'},
        {name: 'Charlie', age: 21, grade: 'C'}
    ]);

    return (
        <>
        <h2>Students Name</h2>
        <ul>
            {students.map((student,index) => (
                <li key={index}>
                    {student.name} - Age {student.age} - Grade {student.grade}
                </li>
            ))}
        </ul>
        <input type='text' placeholder='Add a student name' onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value.trim()) {
                const newStudent = {name: e.target.value.trim(), age: 18, grade: 'A'};
                setStudents([...students, newStudent]);
                e.target.value = '';
            }
        }
        } />
        <button onClick={() => setStudents([])}>
            Clear Students
        </button>
        </>
    )
}

export default Card