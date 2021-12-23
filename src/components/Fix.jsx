import React from "react";

export const Fix = (props) => {
  const { fixTodos, Fix, onClickChange } = props;
  return (
    <div className="fix">
      <p className="title">編集</p>
      <input
        className="fix-box"
        value={fixTodos}
        onChange={Fix}
        placeholder="編集する場所"
      />
      <button onClick={onClickChange}>保存</button>
    </div>
  );
};
