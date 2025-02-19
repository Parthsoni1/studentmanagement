import React, { Component, ChangeEvent, FormEvent, createRef } from "react";

interface TodoFormProps {
  addTodo: (text: string) => void;
}

interface TodoFormState {
  text: string;
  error: string;
}

class TodoForm extends Component<TodoFormProps, TodoFormState> {
  private inputRef = createRef<HTMLInputElement>();

  constructor(props: TodoFormProps) {
    super(props);
    this.state = { text: "", error: "" };
  }

  componentDidMount() {
    this.inputRef.current?.focus();
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value, error: "" });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!this.state.text.trim()) {
      this.setState({ error: "Todo cannot be empty" });
      return;
    }
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.inputRef} value={this.state.text} onChange={this.handleChange} />
          <button type="submit">Add Todo</button>
        </form>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
      </>
    );
  }
}

export default TodoForm;
