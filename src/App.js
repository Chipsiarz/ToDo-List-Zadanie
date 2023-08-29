import { useState } from "react";
import "./App.css";

import TaskInput from "./TaskInput";
import UpdateForm from "./UpdateForm.jsx";
import TaskList from "./TaskList.jsx";

function App() {
  const [taskList, setTaskList] = useState([]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const addTask = () => {
    if (newTask) {
      let num = Math.floor(Math.random() * 10000);
      let newEntry = { id: num, title: newTask, status: false };
      setTaskList([...taskList, newEntry]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    let newTasks = taskList.filter((task) => task.id !== id);
    setTaskList(newTasks);
  };

  const markDone = (id) => {
    let newTask = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTaskList(newTask);
  };

  const canceleUpdate = () => {
    setUpdateData("");
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const updateTask = (e) => {
    let filterRecorsds = [...taskList].filter(
      (task) => task.id !== updateData.id
    );
    let updateObject = [...filterRecorsds, updateData];
    setTaskList(updateObject);
    setUpdateData("");
  };

  return (
    <div className="App">
      <div className="top-container">
        <div className="task-bar">
          <h2>Lista Zadań</h2>

          {updateData && updateData ? (
            <UpdateForm
              updateData={updateData}
              changeTask={changeTask}
              updateTask={updateTask}
              canceleUpdate={canceleUpdate}
            />
          ) : (
            <TaskInput
              newTask={newTask}
              setNewTask={setNewTask}
              addTask={addTask}
            />
          )}
        </div>
      </div>

      {taskList && taskList.length ? "" : "Brak Zadań..."}

      <TaskList
        taskList={taskList}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
