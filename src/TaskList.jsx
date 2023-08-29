import React from "react";
import { FaTrash, FaPen, FaCheck } from "react-icons/fa";

const TaskList = ({ taskList, markDone, setUpdateData, deleteTask }) => {
  return (
    <>
      {taskList &&
        taskList.map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="task-bg">
                <div className={task.status ? "done" : ""}>
                  <span className="task-number">{index + 1 + "."}</span>
                  <span className="task-text">{task.title}</span>
                </div>
                <div className="icons">
                  <span title="Completed" onClick={(e) => markDone(task.id)}>
                    <FaCheck />
                  </span>

                  {task.status ? null : (
                    <span
                      title="Edit"
                      onClick={() =>
                        setUpdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false,
                        })
                      }
                    >
                      <FaPen />
                    </span>
                  )}

                  <span title="Delete" onClick={() => deleteTask(task.id)}>
                    <FaTrash />
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </>
  );
};

export default TaskList;
