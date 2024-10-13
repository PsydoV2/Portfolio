import { ChangeEvent, useState } from "react";

interface ToDoInputProps {
  onAdd: (text: string) => void;
}

export const ToDoInput = (props: ToDoInputProps) => {
  const [newToDo, setNewToDo] = useState("");

  const handleAdd = () => {
    props.onAdd(newToDo);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewToDo(e.target.value);
  };

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="New Item"
          aria-label="New Item"
          aria-describedby="basic-addon1"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <label htmlFor="">
          <button type="button" className="btn btn-primary" onClick={handleAdd}>
            Add Item
          </button>
        </label>
      </div>
    </>
  );
};
