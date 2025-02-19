import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ExamService } from "../../services/ExamService";
import CreateExamDialog from "./CreateExamDialog";
import ExamStudentList from "./ExamStudentList";
import ClassesService from "../../services/ClassesService";
import { Tag } from "primereact/tag";

const ExamList = () => {
  const [exams, setExams] = useState<any>([]);
  const [examsId, setExamId] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [showAddStudentDialog, setShowAddStudentDialog] = useState(false);
  const [classes, setClasses] = useState([]);
  const [users, setUsers] = useState<any>([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUsers(JSON.parse(user));
    }
  }, []);
  
  // Run loadExams and loadClass after users state is set
  useEffect(() => {

    console.log(users);
    
    if (users) {
      loadExams();
      loadClass();
    }
  }, [users]);

  const loadExams = async () => {
    const response: any = await ExamService.getExams();
    response.expirationDate = new Date(response.expirationDate).toLocaleString();
    response.forEach((element: any) => {
      element.expirationDate = new Date(element.expirationDate).toLocaleString();
    });
    console.log(response);
    
    let filterExams = response;
    
    if(users.userType === "Student"){
    // filterExams = response.filter((exam: any) => 
    //   exam.studentIds.some((e: any) => e.id === users.id)
    // );
  }
    setExams(filterExams);
};
const statusBodyTemplate = (product: { status: any; }) => {
    return <Tag value= {getStatus(product)} severity={getSeverity(product)}></Tag>;
};
const actionBodyTemplate = (exam: any) => {
  const handleClick = () => {
    setExamId(exam); // Store the selected exam
    setShowAddStudentDialog(true); // Open popup
  };

  return (
    <Button 
      icon="pi pi-plus" 
      disabled={exam.status === 2} 
      className="p-button-rounded p-button-success mr-2" 
      onClick={handleClick} // Attach event handler
    />
  );
};
const onRowSelect = (e: any) => {
  console.log('e');
  
  setExamId(e.id);
  setShowAddStudentDialog(true)
}

const getStatus = (product: { status: any; }) => {
    switch (product.status) {
        case 1:
            return 'Active';

        case 2:
            return 'Inactive';

        default:
            return null;
    }
}
const getSeverity = (product: { status: any; }) => {
    switch (product.status) {
        case 1:
            return 'success';

        case 2:
            return 'danger';

        default:
            return null;
    }
};

const loadClass = async () => {
    const response: any = await ClassesService.getAllClasses();
    setClasses(response);
}

  return (
    <div>
     { users.userType === "Teacher" ? <Button label="Create Exam" icon="pi pi-plus" onClick={() => setShowDialog(true)} className="p-button-primary" /> : ""}
      <DataTable value={exams}>
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="expirationDate" header="Expiration"></Column>
        <Column field="teacherId" header="Teacher ID"></Column>
        <Column field="classId" header="Class ID"></Column>
        {/* status column */}
        <Column field="status" header="Status" body={statusBodyTemplate}></Column>
        <Column field="action" header="Action" body={actionBodyTemplate }></Column>
      </DataTable>
      <ExamStudentList visible={showAddStudentDialog} exams={examsId}  onHide={() => setShowAddStudentDialog(false)} onExamCreated={loadExams} />
      <CreateExamDialog visible={showDialog} users={users} classes={classes} onHide={() => setShowDialog(false)} onExamCreated={loadExams} />
    </div>
  );
};

export default ExamList;
