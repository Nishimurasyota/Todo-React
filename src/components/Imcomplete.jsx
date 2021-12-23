import React from "react";

export const Imcomplete = (props) => {
  const { todos, onClickComplete, onClickDelete, onClickFix, disabled } = props;
  return (
    <div className="incomplete">
      <p className="title">未完了のリスト</p>
      <ul>
        {todos.map((todo, index) => {
          // indexを使用して何番目の要素かを指定している
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
              <button disabled={disabled} onClick={() => onClickFix(index)}>
                編集
              </button>
              {/* 関数で引数を取りたい場合は新たにアロー関数を設定する */}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
