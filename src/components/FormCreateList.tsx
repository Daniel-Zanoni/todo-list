import { PlusCircle } from 'phosphor-react';

import styles from './FormCreateList.module.css';

export function FormCreateList() {
    return (
        <div className={styles.headerTodo}>
            <form>
                <input placeholder="Adicione uma nova tarefa" />
                <button type="submit" title="Criar uma nova tarefa">
                    Criar
                    <PlusCircle size={20}/>
                </button>
            </form>
        </div>
    );
}