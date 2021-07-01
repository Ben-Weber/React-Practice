import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map(
        (
          task // looping through tasks
        ) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          /> // passing in each task as a prop
        )
      )}
    </>
  );
};

export default Tasks;
