import { PhoneStructure } from "../models/phone";
import { consoleError } from "../services/errors";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAdd = async (task: Task) => {
    try {
      const newTask = await repo.create(task);
      setTasks([...tasks, newTask]);
    } catch (error) {
      consoleError(error);
    }
  };

  const handleUpdate = async (task: Task) => {
    try {
      const updatedTask = await repo.update(task.id, task);
      setTasks(tasks.map((item) => (item.id === task.id ? updatedTask : item)));
    } catch (error) {
      consoleError(error);
    }
  };

  const handleDelete = async (task: Task) => {
    try {
      await repo.delete(task.id);
      setTasks(tasks.filter((item) => item.id !== task.id));
    } catch (error) {
      consoleError(error);
    }
  };

  return {
    tasks,
    handleAdd,
    handleUpdate,
    handleDelete,
  };
}
