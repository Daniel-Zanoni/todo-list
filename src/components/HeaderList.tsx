import styles from './HeaderList.module.css';

export function HeaderList() {
    return (
        <header className={styles.contentHeaderTodo}>
            <div>
                <label className={styles.contentHeaderTodoCreate}>Tarefas criadas</label>
                <span className={styles.contentHeaderTodoCount}>0</span>
            </div>
            <div>
                <label className={styles.contentHeaderTodoFineshed}>Concluídas</label>
                <span className={styles.contentHeaderTodoCount}>0</span>
            </div>
        </header>
    );
}