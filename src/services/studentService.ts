import { mockStudents } from "../mockData";

const StudentService = {
  getAllStudents: async () => {
    return new Promise(resolve => {
      resolve([...mockStudents]);
    });
  },
  createStudent: async (student: any) => {
    return new Promise(resolve => {
      const newStudent = { id: mockStudents.length + 1, ...student };
      mockStudents.push(newStudent);
      resolve(newStudent);
    });
  },
  updateStudent: async (id: number, student: any) => {
    return new Promise((resolve, reject) => {
      const index = mockStudents.findIndex(s => s.id === id);
      if (index !== -1) {
        mockStudents[index] = { ...mockStudents[index], ...student };
        resolve(mockStudents[index]);
      } else {
        reject({ message: "Student not found" });
      }
    });
  },
  deleteStudent: async (id: number) => {
    return new Promise((resolve, reject) => {
      const index = mockStudents.findIndex(s => s.id === id);
      if (index !== -1) {
        mockStudents.splice(index, 1);
        resolve({ message: "Student deleted" });
      } else {
        reject({ message: "Student not found" });
      }
    });
  }
};

export default StudentService;
