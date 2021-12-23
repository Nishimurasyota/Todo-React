import React from "react";

export const Input = (props) => {
  const { todoText, onChange, add } = props;
  return (
    <>
      <div className="input-area">
        <input
          placeholder="タイトルを入力"
          value={todoText}
          onChange={onChange}
        />
        <button onClick={add}>追加</button>
      </div>
    </>
  );
};
