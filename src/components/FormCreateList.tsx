import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { PlusCircle } from 'phosphor-react';

import styles from './FormCreateList.module.css';
import { List } from './List';
import { HeaderList } from './HeaderList';

export function FormCreateList() {

    const [lists, setLists] = useState(['']);
    const [newTextLists, setnewTextLists] = useState('');

    function handleCreateNewList(event: FormEvent) {
        event.preventDefault();
        setLists([...lists, newTextLists]);
        setnewTextLists('');
    }

    function handleNewTextListChange(event: ChangeEvent<HTMLInputElement>) {
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
        <>
            <div className={styles.headerTodo}>
                <form onSubmit={handleCreateNewList} className={styles.headerTodoForm}>
                    <input 
                        className={styles.headerTodoInput}
                        name="list"
                        placeholder="Adicione uma nova tarefa..."
                        onChange={handleNewTextListChange}
                        onInvalid={handleNewListInvalid}
                        required
                    />
                    <button
                        className={styles.headerTodoButton} 
                        type="submit" 
                        title="Criar uma nova tarefa"
                    >
                        Criar
                        <PlusCircle size={20} />
                    </button>
                </form>
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
        </>
    );
}