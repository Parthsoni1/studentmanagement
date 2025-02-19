import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";
import { ToastContainer, toast } from "react-toastify";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ExamService } from "../../services/ExamService";
import StudentService from "../../services/studentService";
import "react-toastify/dist/ReactToastify.css";

interface StudentListProps {
  visible: boolean;
  exams: any;
  onHide: () => void;
  onExamCreated: () => void; // Callback after successful creation
}

const StudentList: React.FC<StudentListProps> = ({ visible, exams, onHide, onExamCreated }) => {
  const [students, setStudents] = useState([]);
  const [studentIds, setStudentIds] = useState<number[]>([]);
  const [availableStudents, setAvailableStudents] = useState([]);

  useEffect(() => {
    if (visible && exams) {
      console.log(exams,studentIds,students);
      loadStudents();
      
    }
  }, [visible, exams]); 

  const loadStudents = async () => {
    try {
      const response = await StudentService.getAllStudents();
      await loadAvailableStudents(response);
    } catch (error) {
      toast.warn("No students found for this exam");
    }
  };

  const loadAvailableStudents = async (AllStudents: any) => {
    try {
      const response = await ExamService.getExamStudents(exams.id); // Assuming this API exists
      if (response) {
      setAvailableStudents(response.data);
      const unassignedStudents = AllStudents.filter(
        (student: any) => !response.data.some((s: any) => s.id === student.id)
      );
      setStudents(unassignedStudents); 
      } else {
      }
    } catch (error) {
      setStudents(AllStudents);
      toast.warn("Failed to load students");
    }
  };

  const handleAddStudents = async () => {
    if (studentIds.length === 0) {
      toast.error("Please select at least one student!");
      return;
    }
    if(exams.studentCount >= studentIds.length){
      toast.error("You have reached the maximum number of students!");
      return;
    }
    try {
      await ExamService.addStudentsToExam(exams.id, studentIds);
      setStudentIds([]);
      loadStudents();
      toast.success("Students added successfully!");
    } catch (error) {
      toast.error("Failed to add students");
    }
  };

  return (
    <>
      <ToastContainer />
      <Dialog header="Student List" visible={visible} onHide={onHide} style={{ width: "500px" }}>
        <div className="p-fluid">
          <div className="p-field">
            <label>Select Students</label>
            <MultiSelect
              value={studentIds}

              optionValue="id"
              options={students}
              onChange={(e) => setStudentIds(e.value)}
              optionLabel="name"
              placeholder="Select Students"
            />
          </div>
          <div className="p-mt-3">
            <Button label="Add Students" icon="pi pi-user-plus" className="p-button-success" onClick={handleAddStudents} />
          </div>
          <DataTable value={availableStudents} paginator rows={5} className="p-mt-3">
            <Column field="id" header="Student ID"></Column>
            <Column field="name" header="Student Name"></Column>
          </DataTable>
        </div>
      </Dialog>
    </>
  );
};

export default StudentList;
