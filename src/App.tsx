import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { createStudent, getAllStudents, updateStudent, deleteStudent } from './store/slice/studentSlice';
import { Student } from './interface';
import { RootState, AppDispatch } from './store';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const students = useSelector((state: RootState) => state.student.data);
  const isLoading = useSelector((state: RootState) => state.student.isLoading);

  const [newStudent, setNewStudent] = useState<Student>({
    id: 0,
    name: "",
    address: "",
    gender: true,
    phone: "",
    classId: "",
    dob: ""
  });

  const handleCreateStudent = () => {
    dispatch(createStudent(newStudent));
  };

  const handleUpdateStudent = (updatedStudent: Student) => {
    dispatch(updateStudent(updatedStudent));
  };

  const handleUpdateClick = (student: Student) => {
    const updatedStudent = { ...student, name: "  " }; // Thay đổi tên sinh viên
    handleUpdateStudent(updatedStudent);
  };

  const handleDeleteStudent = (id: string) => {
    dispatch(deleteStudent(id));
  };

  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);

  useEffect(() => {
    if (newStudent.id > 0) {
      handleCreateStudent();
    }
  }, [newStudent]);

  return (
    <div className="App">
      <h1>Danh sách sinh viên</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.phone}
              <button onClick={() => handleUpdateClick(student)}>Update</button>
              <button onClick={() => handleDeleteStudent(student.id.toString())}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <div>
        <h2>Thêm sinh viên mới</h2>
        <input
          type="text"
          placeholder="Tên"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        {/* Thêm các trường khác của sinh viên */}
        <button onClick={handleCreateStudent}>Thêm</button>
      </div>
    </div>
  );
}

export default App;
