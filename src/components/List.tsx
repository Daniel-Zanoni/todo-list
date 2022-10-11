import { useState } from 'react';

import * as Checkbox from '@radix-ui/react-checkbox';

import { Check, Trash } from 'phosphor-react';

import styles from './List.module.css';

interface ListProps {
    content: string;
    onDeleteList: (list: string) => void;
}

export function List({ content, onDeleteList }: ListProps) {
    const [handleInputChecked, setHandleInputChecked] = useState(false);
    
    function handleDeleteComment() {
        onDeleteList(content);
    }

    return (
        <div>
            <div className={styles.list}>
                <Checkbox.Root 
                    className={styles.listInputCheckbox}
                    onCheckedChange={(status) => {
                    status ? setHandleInputChecked(true) : setHandleInputChecked(false)}}
                >
                    <Checkbox.Indicator>
                        <Check weight="bold" />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <p 
                    className={handleInputChecked === false ? styles.listParagraph : styles.listParagraphDone}
                >
                    {content}
                </p>
                <button 
                    className={styles.listDeleteComment}
                    onClick={handleDeleteComment} 
                    title="Deletar comentário"
                >
                    <Trash size={22} />
                </button>
            </div>
        </div>
    );
}