import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
// import '../../public/assets/css/style.css'


function Sidebar() {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : '';
    const role = user.userType;
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="../index.html">
                        <i className="icon-grid menu-icon" />
                        <span className="menu-title"><NavLink to="/" className="nav-link">Dashboard</NavLink></span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <i className="mdi mdi-account-multiple-outline" />
                        <span className="menu-title">Students</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                               { role === "Teacher" && <a className="nav-link"  href="../pages/ui-features/dropdowns.html"> <NavLink to="/add-student" className="nav-link">
                                    Add Student
                                </NavLink></a> } 
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="../pages/ui-features/dropdowns.html"> <NavLink to="/student-list" className="nav-link">
                                    Student List
                                </NavLink></a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                        <i className="mdi mdi-account-star" />
                        <span className="menu-title">Teachers</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="form-elements">
                        <ul className="nav flex-column sub-menu">
                        { role === "Teacher" &&  <li className="nav-item"><a className="nav-link" href="../pages/forms/basic_elements.html">Add Teacher</a></li> }
                            <li className="nav-item"><a className="nav-link" href="../pages/forms/basic_elements.html"><NavLink to="/teacher-list" className="nav-link">Teachers List</NavLink></a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                        <i className="mdi mdi-book-open-variant" />
                        <span className="menu-title">Classes</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="charts">
                        <ul className="nav flex-column sub-menu">
                        { role === "Teacher" &&  <li className="nav-item"> <a className="nav-link" href="../pages/charts/chartjs.html">Add Class</a></li> }
                            <li className="nav-item"> <a className="nav-link" href="../pages/charts/chartjs.html"><NavLink to="/classes-list" className="nav-link">Classes List</NavLink></a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                        <i className="mdi mdi-table-large" />
                        <span className="menu-title">Exams</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="tables">
                        <ul className="nav flex-column sub-menu">
                        { role === "Teacher" &&  <li className="nav-item"> <a className="nav-link" href="../pages/tables/basic-table.html">Add Exam</a></li> }  
                            <li className="nav-item"> <a className="nav-link" href="../pages/tables/basic-table.html"><NavLink to="/exam-list" className="nav-link">Exams List</NavLink></a></li>
                        </ul>
                    </div>
                </li>              
            </ul>
        </nav>
    );
}

export default Sidebar;