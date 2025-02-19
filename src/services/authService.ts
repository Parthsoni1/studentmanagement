import { mockUsers } from "../mockData";

const AuthService = {
  login: async (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      const user = mockUsers.find(u => u.email === email && u.password === password);
      if (user) {
        resolve({ message: "Login successful", user });
      } else {
        reject({ message: "Invalid credentials" });
      }
    });
  }
};

export default AuthService;
