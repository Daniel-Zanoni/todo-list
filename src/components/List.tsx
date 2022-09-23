import * as Checkbox from '@radix-ui/react-checkbox';

import { Trash } from 'phosphor-react';

import styles from './List.module.css';

interface ListProps {
    content: string;
    onDeleteList: (list: string) => void;
}

export function List({ content, onDeleteList }: ListProps) {

    function handleDeleteComment() {
        onDeleteList(content);
    }

    return (
        <div className={styles.list}>
            <Checkbox.Root className={styles.listInputCheckbox}>
                <Checkbox.Indicator />
            </Checkbox.Root>
            <p>{content}</p>
            <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={20} />
            </button>
        </div>    
    );
}