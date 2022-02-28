import { useState } from "react";
import Backdrop from "./Backdrop";
import Model from "./Modal";

const Todo = (props) => {
  const [modelIsOpen, setModelIsOpen] = useState(false);

  const deleteHandler = () => {
    setModelIsOpen(true);
  };

  const cancelHandler = () => {
    setModelIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          {" "}
          Delete{" "}
        </button>
      </div>
      {modelIsOpen ? <Model onCancel={cancelHandler} /> : null}
      {modelIsOpen && <Backdrop />}
    </div>
  );
};

export default Todo;
