const Model = (props) => {
  const cancelHandler = () => {
    props.onCancel();
    console.log("Cancel button was clicked !");
  };

  const confirmHandler = () => {
    props.onCancel();
    console.log("Confirm button was clicked !");
  };

  return (
    <div className="modal">
      <p>Are you Sure !!</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Model;
