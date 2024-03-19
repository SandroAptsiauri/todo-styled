import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inProgress, setInProgress] = useState([]);

  const addTask = () => {
    const taskName = prompt("დაამატეთ ახალი დავალება:");
    if (taskName) {
      setTasks([...tasks, taskName]);
    }
  };

  const moveToInProgress = (index) => {
    const task = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index));
    setInProgress([...inProgress, task]);
  };

  const moveToCompleted = (index) => {
    const task = inProgress[index];
    setInProgress(inProgress.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="column">
        <h2>შესასრულებელი</h2>
        <div className="tasks">
          {tasks.map((task, index) => (
            <div key={index} onClick={() => moveToInProgress(index)}>
              {task}
            </div>
          ))}
        </div>
        <button onClick={addTask}>დაამატეთ დავალება</button>
      </div>
      <div className="column">
        <h2>In Progress</h2>
        <div className="tasks">
          {inProgress.map((task, index) => (
            <div key={index} onClick={() => moveToCompleted(index)}>
              {task}
            </div>
          ))}
        </div>
      </div>
      <div className="column">
        <h2>შესრულებული</h2>
      </div>
    </div>
  );
}

export default App;