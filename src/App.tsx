import styles from './App.module.css';
import './global.css';

import todoLogo from './assets/todo-logo.svg';

export function App() {
    return (
        <div>
            <header className={styles.header}>
                <img src={todoLogo} />
            </header>

            <div className={styles.wrapper}>
                <main>
                    <div className={styles.headerTodo}>
                        <form>
                            <input placeholder="Adicione uma nova tarefa" />
                            <button type="submit" title="Criar uma nova tarefa">Criar</button>
                        </form>
                    </div>
                    <div className={styles.contentTodo}>
                        <header className={styles.contentHeaderTodo}>
                            <div>
                                <label className={styles.contentHeaderTodoCreate}>Tarefas criadas</label>
                                <span>0</span>
                            </div>
                            <div>
                                <label className={styles.contentHeaderTodoFineshed}>Concluídas</label>
                                <span>0</span>
                            </div>
                        </header>
                        <div className={styles.listsTodo}>
                            <img />
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
