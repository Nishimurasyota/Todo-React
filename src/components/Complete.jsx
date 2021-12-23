import React from "react";

export const Complete = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete">
      <p className="title">完了したリスト</p>
      <ul>
        {todos.map((completeTodo, index) => {
          return (
            <div key={completeTodo} className="list-row">
              <li>{completeTodo}</li>
              <button onClick={() => onClickBack(index)}>元に戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
