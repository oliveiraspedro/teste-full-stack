import "./TaskList.css";
import SideBar from "../Components/SideBar/SideBar";
import Task from "../Components/Task/Task";

const handleMarkCompleted = () => {};
const handleEdit = () => {};
const handleDelete = () => {};

export default function TaskList() {
  return (
    <div className="task-list-container">
      <SideBar />
      <div className="task-list-content">
        <main className="mainContent">
          <div className="taskSection">
            <h1>Lista de Tarefas</h1>
            <ul className="taskList">
              <Task
                taskID="1"
                taskName="Fazer dever de matemática"
                isCompleted={false}
                markCompleted={handleMarkCompleted}
                onEdit={handleEdit}
                onDelete={handleDelete}
              ></Task>
              <Task
                taskID="2"
                taskName="Fazer dever de português"
                isCompleted={false}
                markCompleted={handleMarkCompleted}
                onEdit={handleEdit}
                onDelete={handleDelete}
              ></Task>
            </ul>
            <div className="addTaskSection">
              <button className="addButton">+</button>
            </div>
          </div>

          <div className="sectionDivider"></div>

          <div className="completedTasksSection">
            <h1>Tarefas Concluídas</h1>
            <ul className="completedTasksList">
              <li className="completedTaskItem">
                <input type="radio" />
                Lavar a louça
                <div className="taskActions">
                  <button className="deleteButton">✕</button>
                </div>
              </li>
              <li className="completedTaskItem">
                <input type="radio" />
                Fazer dever de casa de Português
                <div className="taskActions">
                  <button className="deleteButton">✕</button>
                </div>
              </li>
              <li className="completedTaskItem">
                <input type="radio" />
                Jogar bola
                <div className="taskActions">
                  <button className="deleteButton">✕</button>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
