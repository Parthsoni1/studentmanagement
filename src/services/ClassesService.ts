import { mockClasses } from "../mockData";

const ClassesService = {
  getAllClasses: async () => {
    return new Promise(resolve => {
      resolve([...mockClasses]);
    });
  },
  createClasses: async (newClass: any) => {
    return new Promise(resolve => {
      const newClassWithId = { id: mockClasses.length + 1, ...newClass };
      mockClasses.push(newClassWithId);
      resolve(newClassWithId);
    });
  },
  updateClasses: async (id: number, updatedClass: any) => {
    return new Promise((resolve, reject) => {
      const index = mockClasses.findIndex(c => c.id === id);
      if (index !== -1) {
        mockClasses[index] = { ...mockClasses[index], ...updatedClass };
        resolve(mockClasses[index]);
      } else {
        reject({ message: "Class not found" });
      }
    });
  },
  deleteClasses: async (id: number) => {
    return new Promise((resolve, reject) => {
      const index = mockClasses.findIndex(c => c.id === id);
      if (index !== -1) {
        mockClasses.splice(index, 1);
        resolve({ message: "Class deleted" });
      } else {
        reject({ message: "Class not found" });
      }
    });
  }
};

export default ClassesService;
