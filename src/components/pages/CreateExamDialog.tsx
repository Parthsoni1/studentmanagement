import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { ToastContainer, toast } from "react-toastify";
import { ExamService } from "../../services/ExamService";
import "react-toastify/dist/ReactToastify.css";

interface CreateExamDialogProps {
  visible: boolean;
  classes: any;
  users: any;
  onHide: () => void;
  onExamCreated: () => void; // Callback after successful creation
}

const CreateExamDialog: React.FC<CreateExamDialogProps> = ({ visible, users, classes, onHide, onExamCreated }) => {
  const [name, setName] = useState("");
  const [expirationDate, setExpirationDate] = useState<Date | null>(null);
  const [teacherId, setTeacherId] = useState("");
  const [classId, setClassId] = useState("");
  const [studentCount, setCount] = useState("");

  useEffect(() => {
    if (visible && users) {
      setTeacherId(users.id);
    }
  }, [visible, users]);

  const handleSubmit = async () => {
    console.log(name, expirationDate, teacherId, classId,studentCount);
    
    if (!name || !expirationDate || !teacherId || !classId || !studentCount) {
      toast.error("Please fill all fields!");
      return;
    }



    const newExam = {
      name,
      studentCount: 0, // Default 0 since no students yet
      expirationDate: expirationDate.toISOString(),
      teacherId: parseInt(teacherId, 10),
      classId: parseInt(classId, 10),
    };

    try {
      await ExamService.addExam(newExam);
      toast.success("Exam created successfully!");
      onExamCreated(); // Refresh exam list after creation
      onHide(); // Close popup
    } catch (error) {
      toast.error("Failed to create exam!");
    }
  };

  return (
    <>
      <ToastContainer />
      <Dialog header="Create New Exam" visible={visible} onHide={onHide} style={{ width: "450px" }}>
        <div className="p-fluid">
          <div className="p-field">
            <label>Exam Name</label>
            <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter exam name" />
          </div>
          <div className="p-field">
            <label>Expiration Date</label>
            <Calendar value={expirationDate} onChange={(e) => setExpirationDate(e.value as Date)} showTime />
          </div>
          <div className="p-field">
            <label>Teacher ID</label>
            <InputText value={users.userType === "Teacher" ? users.id : teacherId } disabled={users.userType === "Teacher"} onChange={(e) => setTeacherId(e.target.value)} placeholder="Enter Teacher ID" />
          </div>
          <div className="p-field">
            <label>Class ID</label>
            {/* dropdown of clasess */ }
            <select value={classId} onChange={(e) => setClassId(e.target.value)}>
              <option value="">Select a class</option>
              {classes.map((cls: any) => (
                <option key={cls.id} value={cls.id}>
                  {cls.className}
                </option>
              ))}
            </select>

          </div>
          <div className="p-field">
            <label>Student Count</label>
            <InputText value={studentCount} onChange={(e) => setCount(e.target.value)} placeholder="Enter Student Count" />
          </div>
          <div className="p-mt-3">
            <Button label="Create Exam" icon="pi pi-check" className="p-button-success" onClick={handleSubmit} />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CreateExamDialog;
