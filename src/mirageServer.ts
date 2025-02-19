// // src/mirageServer.ts
// import { createServer, Model, Response, Factory } from 'miragejs';
// import { ClassFactory, StudentFactory, TeacherFactory, ExamFactory } from './factories';

// export function makeServer() {
//   const server = createServer({
//     models: {
//       auth: Model.extend({
//         email: string,
//         password: String,
//       }),
//       class: Model.extend({ name: String }),
//       student: Model.extend({ name: String }),
//       teacher: Model.extend({ name: String }),
//       exam: Model.extend({ name: String }),
//     },

//     factories: {
//       class: ClassFactory,
//       student: StudentFactory,
//       teacher: TeacherFactory,
//       exam: ExamFactory,
//     },

//     seeds(server) {
//       // Use factory to create data
//       server.create('auth', { email: 'test@example.com', password: 'password123' });
//       server.create('class'); // Factory will generate class data
//       server.create('student'); // Factory will generate student data
//       server.create('teacher'); // Factory will generate teacher data
//       server.create('exam'); // Factory will generate exam data
//     },

//     routes() {
//       this.namespace = 'api';

//       this.get('/classes', (schema) => {
//         return schema.classes.all();
//       });

//       this.post('/classes', (schema, request) => {
//         let newClass = JSON.parse(request.requestBody);
//         return schema.class.create(newClass);
//       });

//       this.put('/classes/:id', (schema, request) => {
//         let id = request.params.id;
//         let updatedClass = JSON.parse(request.requestBody);
//         let classToUpdate = schema.class.find(id);
//         return classToUpdate.update(updatedClass);
//       });

//       this.delete('/classes/:id', (schema, request) => {
//         let id = request.params.id;
//         let classToDelete = schema.class.find(id);
//         classToDelete.destroy();
//         return { message: 'Class deleted' };
//       });

//       // Add more routes for other resources like students, teachers, exams, etc.
//     },
//   });

//   return server;
// }
