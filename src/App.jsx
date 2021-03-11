import styled from "styled-components";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { uid } from "uid";
import TodoNav from "./components/TodoNav";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Footer from "./components/Footer";

const AppHeader = styled.h1`
  font-family: "Raleway", sans-serif;
  letter-spacing: -0.045em;
  font-size: 36px;
  font-weight: 700;
  color: #333333;
  text-align: center;
  margin: 0px;
  margin-top: 32px;
`;
const DeleteAllBtn = styled.button`
  border: none;
  background-color: #eb5757;
  padding: 12px 26px;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  vertical-align: middle;
  &:hover {
    cursor: pointer;
  }
`;
const DeleteAllWrapper = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  margin-top: 33px;
  justify-content: flex-end;
`;

const removeAllCompletedTodos = (todos, updateTodos) => {
  const newTodos = todos.filter((todo) => todo.completed !== true);
  updateTodos(newTodos);
  localStorage.setItem("todos", JSON.stringify(newTodos));
};

const checkComplete = (todos) => {
  let count = 0;
  todos.forEach((todo) => {
    if (todo.completed) count++;
  });
  return count;
};

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "learn react",
      completed: false,
      id: uid(),
    },
  ]);
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    if (localTodos.length === 0 && todos.length >= 1) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else if (localTodos !== null) {
      setTodos(localTodos);
      console.log(localTodos);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <AppHeader>#todo</AppHeader>
      <TodoNav />
      <Switch>
        <Route path="/active-todos">
          <AddTodo todos={todos} setTodos={setTodos} />
          {todos.map((todo) =>
            todo.completed === false ? (
              <Todo
                todo={todo}
                key={todo.id}
                updateTodo={setTodos}
                todos={todos}
              />
            ) : null
          )}
        </Route>

        <Route path="/completed-todos">
          {todos.map((todo) =>
            todo.completed === true ? (
              <Todo
                todo={todo}
                key={todo.id}
                deleteBtn="true"
                updateTodo={setTodos}
                todos={todos}
              />
            ) : null
          )}
          {checkComplete(todos) > 0 && (
            <DeleteAllWrapper>
              <DeleteAllBtn
                onClick={() => removeAllCompletedTodos(todos, setTodos)}
              >
                <DeleteOutlineIcon fontSize="inherit" /> delete all
              </DeleteAllBtn>
            </DeleteAllWrapper>
          )}
        </Route>
        <Route path="/">
          <AddTodo todos={todos} setTodos={setTodos} />
          {todos.map((todo) => (
            <Todo
              todo={todo}
              filter={null}
              key={todo.id}
              updateTodo={setTodos}
              todos={todos}
            />
          ))}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
