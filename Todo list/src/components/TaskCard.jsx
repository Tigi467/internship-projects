function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h2>{task.title}</h2>
      <span className={task.completed ? "done" : "pending"}>
        {task.completed ? "✔ Finished" : "⌛ In Progress"}
      </span>
    </div>
  );
}

export default TaskCard;
