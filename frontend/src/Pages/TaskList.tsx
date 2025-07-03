import "./TaskList.css";
import SideBar from "../Components/SideBar";

export default function TaskList() {
  return (
    <div className="task-list-container">
      <SideBar />
      <div className="task-list-content">
        <main className="mainContent">
          <div className="taskSection">
            <h1>Lista de Tarefas</h1>
            <ul className="taskList">
              <li className="taskItem">
                <input type="radio" />
                Fazer lição de casa
                <div className="taskActions">
                  <button className="completeButton">✓</button>
                  <button className="deleteButton">✕</button>
                </div>
              </li>
              <li className="taskItem">
                <input type="radio" />
                Estudar para a prova
                <div className="taskActions">
                  <button className="completeButton">✓</button>
                  <button className="deleteButton">✕</button>
                </div>
              </li>
              <li className="taskItem">
                <input type="radio" />
                Fazer o projeto de matemática
                <div className="taskActions">
                  <button className="completeButton">✓</button>
                  <button className="deleteButton">✕</button>
                </div>
              </li>
              <li className="taskItem">
                <input type="radio" />
                Ler um capítulo do livro
                <div className="taskActions">
                  <button className="completeButton">✓</button>
                  <button className="deleteButton">✕</button>
                </div>
              </li>
              <li className="taskItem">
                <input type="radio" />
                Praticar programação
                <div className="taskActions">
                  <button className="completeButton">✓</button>
                  <button className="deleteButton">✕</button>
                </div>
              </li>
            </ul>
          </div>

          <div className="sectionDivider"></div>

          <div className="completedTasksSection">
            <h2>Tarefas Concluídas</h2>
            <ul className="completedTasksList">
              <li className="completedTaskItem">
                <input type="radio" />
                Lavar a louça
              </li>
              <li className="completedTaskItem">
                <input type="radio" />
                Fazer dever de casa de Português
              </li>
              <li className="completedTaskItem">
                <input type="radio" />
                Jogar bola
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
