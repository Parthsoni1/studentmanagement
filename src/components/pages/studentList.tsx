import { useState, useEffect } from "react";
import CommonTable from "../../shared/CommonTable";
import StudentService from "../../services/studentService";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    StudentService.getAllStudents()
      .then((data: any) => {
        setStudents(data);
        setLoading(false); // Stop loading once data is received
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  const studentColumns = [
    { field: "id", header: "ID" },
    { field: "name", header: "Name" },
    { field: "age", header: "Age" },
    { field: "classId", header: "Class ID" },
    { field: "class.name", header: "Class Name", body: (rowData: any) => rowData.class?.name || "N/A" },
  ];

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          {/* <ProgressSpinner /> */}
        </div>
      ) : (
        <CommonTable
          data={students}
          columns={studentColumns}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
          title="Student List"
        />
      )}
    </div>
  );
};

export default StudentList;
