import styles from './HeaderList.module.css';

interface HeaderProps {
    countLists: number;
}

export function HeaderList({ countLists }: HeaderProps) {
    return (
        <div>
            <header className={styles.contentHeaderTodo}>
                <div>
                    <label className={styles.contentHeaderTodoCreate}>Tarefas criadas</label>
                    <span className={styles.contentHeaderTodoCount}>{countLists}</span>
                </div>
                <div>
                    <label className={styles.contentHeaderTodoFineshed}>Concluídas</label>
                    <span className={styles.contentHeaderTodoCount}>0</span>
                </div>
            </header>
        </div>
    );
}