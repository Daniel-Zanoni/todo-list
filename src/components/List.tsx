import * as Checkbox from '@radix-ui/react-checkbox';

import { Trash } from 'phosphor-react';
import { useState } from 'react';

import styles from './List.module.css';

interface ListProps {
    content: string;
    onDeleteList: (list: string) => void;
}

export function List({ content, onDeleteList }: ListProps) {

    const [completedList, setCompletedList] = useState(0);

    function handleDeleteComment() {
        onDeleteList(content);
    }

    function handleCompletedList() {
        setCompletedList((state) => {
            return state +1;
        });
    }

    function handleSubmitCountCompletedList(count: number) {
        count = completedList;
        return count;
    }

    return (
        <div className={styles.list}>
            <Checkbox.Root 
                className={styles.listInputCheckbox}
                onClick={handleCompletedList}
            >
                <Checkbox.Indicator />
            </Checkbox.Root>
            <p>{content}</p>
            <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={20} />
            </button>
        </div>    
    );
}