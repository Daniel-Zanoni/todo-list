import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { HeaderList } from './HeaderList';
import { List } from './List';

import { PlusCircle } from 'phosphor-react';

import styles from './TodoList.module.css';

export function TodoList() {
    const [lists, setLists] = useState(['']);
    const [newTextLists, setnewTextLists] = useState('');
    const isNewEmptyList = newTextLists.length === 0;

    function handleCreateNewList(event: FormEvent) {
        event.preventDefault();
        setLists([...lists, newTextLists]);
        setnewTextLists('');
    }

    function handleNewTextListOnChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setnewTextLists(event.target.value);
    }

    function handleNewListInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Este campo é obrigatório!');
    }

    function deleteList(listToDelete: string) {
        const listWithoutDeletedOne = lists.filter(list => {
            return list !== listToDelete;
        });
        setLists(listWithoutDeletedOne);
    }

    return (
        <div className={styles.contentTodo}>
            <div>
                <form onSubmit={handleCreateNewList} className={styles.headerTodoForm}>
                    <input 
                        name="list"
                        placeholder="Adicione uma nova tarefa..."
                        value={newTextLists}
                        className={styles.headerTodoInput}
                        onChange={handleNewTextListOnChange}
                        onInvalid={handleNewListInvalid}
                        required
                    />
                    <button
                        className={styles.headerTodoButton} 
                        type="submit" 
                        title="Criar uma nova tarefa"
                        disabled={isNewEmptyList}
                    >
                        Criar
                        <PlusCircle size={20} />
                    </button>
                </form>
            </div>
            <HeaderList />
            {lists.map(list => {
                return (
                    <List 
                        key={list}
                        content={list}
                        onDeleteList={deleteList}
                    />
                );
            })}
        </div>
    );
}