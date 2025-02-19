import React, { useState } from "react";
import ExamList from "./ExamList";
import ExamStudentList from "./ExamStudentList";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const AddExam = () => {
  const [selectedExamId, setSelectedExamId] = useState(null);

  return (
    <div className="p-m-4">
      {selectedExamId ? (
        <ExamStudentList examId={selectedExamId} onBack={() => setSelectedExamId(null)} />
      ) : (
        <ExamList />
      )}
    </div>
  );
};

export default AddExam;
