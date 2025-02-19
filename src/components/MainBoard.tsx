import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Route, Routes } from 'react-router-dom';
import AddStudent from './pages/AddStudent';
import StudentList from './pages/studentList';
import TeacherList from './pages/TeacherList';
import ClassesList from './pages/ClassesList';
import AddExam from './pages/AddExam';
import ScrollToTop from '../views/ScrollToTop';
import ExamList from './pages/ExamList';
// import '../../public/assets/css/style.css'
function MainBoard() {

  return (
    <div className="container-scroller">
      <ScrollToTop />
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <Routes>
              <Route path="/add-student" element={<AddStudent />} />
              <Route path="/student-list" element={<StudentList />} />
              <Route path="/teacher-list" element={<TeacherList />} />
              <Route path="/classes-list" element={<ClassesList />} />
              <Route path="/exam-list" element={<ExamList />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>

  );
}

export default MainBoard;