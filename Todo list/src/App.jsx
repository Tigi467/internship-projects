import TaskCard from "./components/TaskCard";
import tasks from "./data";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <h1>Tasks Overview</h1>
      <div className="task-list">
        {tasks.map((item) => (
          <TaskCard key={item.id} task={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
