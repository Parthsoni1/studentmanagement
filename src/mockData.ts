export const mockUsers = [
    { id: 1, email: "test@example.com", password: "password123", userType: "Student", name: "John Doe" },
    { id: 2, email: "teacher@example.com", password: "password123", userType: "Teacher", name: "Jane Smith" }
  ];
  
  export const mockClasses = [
    { id: 1, name: "Math" },
    { id: 2, name: "English" }
  ];
  
  export const mockStudents = [
    { id: 1, name: "Alice", age: 16, classId: 1 },
    { id: 2, name: "Bob", age: 15, classId: 2 }
  ];
  
  export const mockTeachers = [
    { id: 1, name: "Mr. Anderson", subject: "Math" },
    { id: 2, name: "Ms. Johnson", subject: "English" }
  ];
  
  export const mockExams = [
    { id: 1, name: "Math Test", studentCount: 30, classId: 1, teacherId: 1,studentIds:[1,2,3], expirationDate: new Date(), status:1 }
  ];
  