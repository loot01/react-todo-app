import styled from "styled-components";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const TodoWrapper = styled.div`
  width: 50%;
  margin: 33px auto;
  font-weight: 500;
  font-size: 18px;
  color: ${({ todo }) => todo.completed && "#333333"};
  text-decoration: ${({ todo }) => todo.completed && "line-through"};
  display: flex;
  justify-content: space-between;
`;
const StyledCheckBox = styled.input`
  transform: scale(1.25);
  margin-right: 7px;
`;
const StyledDeleteBtn = styled.button`
  border: none;
  color: #bdbdbd;
  background: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const completeTodo = (todoToUpdate, todos, updateTodos) => {
  todoToUpdate.completed = !todoToUpdate.completed;
  const newTodos = todos.map((todo) =>
    todo.id === todoToUpdate.id ? todoToUpdate : todo
  );
  updateTodos(newTodos);
};

const removeTodo = (todoToRemove, todos, updateTodos) => {
  const newTodos = todos.filter((todo) => todo.id !== todoToRemove.id);
  updateTodos(newTodos);
};

const Todo = ({ todo, deleteBtn, updateTodo, todos }) => {
  if (!todo.text) return null;
  return (
    <TodoWrapper todo={todo}>
      <div>
        <StyledCheckBox
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo, todos, updateTodo)}
        />
        {todo.text}
      </div>
      {deleteBtn && (
        <StyledDeleteBtn onClick={() => removeTodo(todo, todos, updateTodo)}>
          <DeleteOutlineIcon />
        </StyledDeleteBtn>
      )}
    </TodoWrapper>
  );
};

export default Todo;
