import { useState } from "react";
import { uid } from "uid";
import styled from "styled-components";

const TodoAddWrapper = styled.form`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;
const TodoAddInput = styled.input`
  width: 476px;
  border: 1px solid #bdbdbd;
  border-radius: 12px;
  padding: 24px 0;
  padding-left: 12px;
  &::placeholder {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #828282;
  }
`;
const TodoAddSubmit = styled.button`
  background-color: #2f80ed;
  color: white;
  padding: 20px 40px;
  border: none;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  width: 109px;
  &:hover {
    cursor: pointer;
  }
`;

const AddTodo = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");
  const todo = {
    text: newTodo,
    completed: false,
    id: uid(),
  };
  return (
    <TodoAddWrapper
      onSubmit={(e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
        localStorage.setItem("todos", JSON.stringify([...todos, todo]));
        e.target.reset();
        setNewTodo("");
      }}
    >
      <TodoAddInput
        placeholder="add details"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <TodoAddSubmit type="submit">Add</TodoAddSubmit>
    </TodoAddWrapper>
  );
};

export default AddTodo;
