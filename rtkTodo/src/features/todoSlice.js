import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "text" }],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Date.now(),
        text: action.payload,
      };
      if (todo.text === "") return alert("You are adding an empty todo");
      state.todos.unshift(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
