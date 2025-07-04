import "./Task.css";

interface TaskProps {
  taskID: string;
  taskName: string;
  isCompleted: boolean;
  markCompleted: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({
  taskID,
  taskName,
  isCompleted,
  markCompleted,
  onEdit,
  onDelete,
}) => {
  return (
    <li className="taskItem">
      <input type="radio" onClick={markCompleted} />
      {taskName}
      <div className="taskActions">
        <button className="editButton" onClick={onEdit}>
          ✏️
        </button>
        <button className="deleteButton" onClick={onDelete}>
          ✕
        </button>
      </div>
    </li>
  );
};

export default Task;
