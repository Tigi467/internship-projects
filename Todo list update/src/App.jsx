import { useState } from "react";
import TaskCard from "./components/TaskCard";
import tasks from "./data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState(tasks);
  const [newTitle, setNewTitle] = useState("");
  const [open, setOpen] = useState(false);

  function handleAddTask() {
    if (!newTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: newTitle.trim(),
      completed: false,
    };

    setTaskList((prev) => [...prev, newTask]);
    setNewTitle("");
    setOpen(false);
  }

  return (
    <div className="wrapper">
      <div className="header-row">
        <h1>Tasks Overview</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>+ Add Task</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a new task</DialogTitle>
            </DialogHeader>

            <Input
              placeholder="Task title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button onClick={handleAddTask}>Add Task</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="task-list">
        {taskList.map((item) => (
          <TaskCard key={item.id} task={item} />
        ))}
      </div>
    </div>
  );
}

export default App;