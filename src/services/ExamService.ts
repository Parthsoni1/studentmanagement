import { mockExams } from "../mockData";

export const ExamService = {
  getExams: async () => {
    return new Promise(resolve => {
      resolve([...mockExams]);
    });
  },
  addExam: async (exam: any) => {
    return new Promise(resolve => {
      const newExam = { id: mockExams.length + 1, ...exam };
      mockExams.push(newExam);
      resolve(newExam);
    });
  },
  addStudentsToExam: async (examId: number, studentIds: number[]) => {
    return new Promise(resolve => {
      const exam = mockExams.find(e => e.id === examId);
      if (exam) {
        exam.studentCount += studentIds.length;
        resolve({ message: "Students added to exam" });
      } else {
        resolve({ message: "Exam not found" });
      }
    });
  },
  getExamStudents: async (examId: number) => {
    return new Promise((resolve, reject) => {
      const exam = mockExams.find(e => e.id === examId);
      if (exam) {
        resolve({ exam, students: [] }); // Assuming mock student data is managed elsewhere
      } else {
        reject({ message: "Exam not found" });
      }
    });
  }
};
