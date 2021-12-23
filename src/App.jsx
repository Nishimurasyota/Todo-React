import React, { useState } from "react";
import "./styles.css";
import { Input } from "./components/Input.jsx";
import { Imcomplete } from "./components/Imcomplete.jsx";
import { Complete } from "./components/Complete.jsx";
import { Fix } from "./components/Fix.jsx";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);
  const [fixTodos, setFixTodos] = useState("");

  const onChangeText = (event) => setTodoText(event.target.value);
  const onChangeFix = (event) => setFixTodos(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return; //空文字の場合は追加されない
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    splice(index);
    const completeTodo = [...completeTodos, incompleteTodos[index]];
    setcompleteTodos(completeTodo);
  };

  const onClickBack = (index) => {
    const completeTodo = [...completeTodos];
    completeTodo.splice(index, 1);
    setcompleteTodos(completeTodo);
    const newTodo = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newTodo);
  };

  const splice = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickFix = (index) => {
    splice(index);
    const fixTodo = incompleteTodos[index];
    setFixTodos(fixTodo);
  };

  const onClickChange = () => {
    if (fixTodos === "") return; //空文字の場合は追加されない
    const newTodos = [...incompleteTodos, fixTodos];
    setIncompleteTodos(newTodos);
    setFixTodos("");
  };

  return (
    <>
      <Input todoText={todoText} onChange={onChangeText} add={onClickAdd} />
      <Imcomplete
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
        onClickFix={onClickFix}
        disabled={fixTodos.length > 1}
      />
      <Complete todos={completeTodos} onClickBack={onClickBack} />
      {fixTodos.length >= 1 && (
        <Fix
          fixTodos={fixTodos}
          Fix={onChangeFix}
          onClickChange={onClickChange}
        />
      )}
    </>
  );
};
