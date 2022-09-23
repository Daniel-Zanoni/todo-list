import { Article } from 'phosphor-react';

import styles from './EmptyList.module.css';

export function EmptyList() {
    return (
        <div className={styles.contentTodo}>
            <div className={styles.listsTodo}>
                <Article color="#808080" size={56} opacity="0.20" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    );
}