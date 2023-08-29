const UpdateForm = ({ updateData, changeTask, updateTask, canceleUpdate }) => {
  return (
    <div className="update-task">
      <div>
        <input
          value={updateData && updateData.title}
          onChange={(e) => changeTask(e)}
        ></input>
      </div>
      <div>
        <button onClick={updateTask}>Zmień</button>
        <button className="top-container-btn" onClick={canceleUpdate}>
          Anuluj
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;
