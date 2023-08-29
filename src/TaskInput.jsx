const TaskInput = ({ newTask, setNewTask, addTask }) => {
  return (
    <div className="add-task">
      <div>
        <input
          placeholder="Wpisz zadanie"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        ></input>
      </div>
      <div>
        <button className="top-container-btn" onClick={addTask}>
          Dodaj
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
