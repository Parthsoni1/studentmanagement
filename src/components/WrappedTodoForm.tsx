import withLogging from "./withLogging";
import TodoForm from "./TodoForm";

const WrappedTodoForm = withLogging(TodoForm);

export default WrappedTodoForm;
