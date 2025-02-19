import { mockTeachers } from "../mockData";

const TeacherService = {
  getAllTeachers: async () => {
    return new Promise(resolve => {
      resolve([...mockTeachers]);
    });
  },
  createTeacher: async (teacher: any) => {
    return new Promise(resolve => {
      const newTeacher = { id: mockTeachers.length + 1, ...teacher };
      mockTeachers.push(newTeacher);
      resolve(newTeacher);
    });
  },
  updateTeacher: async (id: number, teacher: any) => {
    return new Promise((resolve, reject) => {
      const index = mockTeachers.findIndex(t => t.id === id);
      if (index !== -1) {
        mockTeachers[index] = { ...mockTeachers[index], ...teacher };
        resolve(mockTeachers[index]);
      } else {
        reject({ message: "Teacher not found" });
      }
    });
  },
  deleteTeacher: async (id: number) => {
    return new Promise((resolve, reject) => {
      const index = mockTeachers.findIndex(t => t.id === id);
      if (index !== -1) {
        mockTeachers.splice(index, 1);
        resolve({ message: "Teacher deleted" });
      } else {
        reject({ message: "Teacher not found" });
      }
    });
  }
};

export default TeacherService;
