import { Header } from './components/Header';
import { FormCreateList } from './components/FormCreateList';
import { EmptyList } from './components/EmptyList';

import styles from './App.module.css';

import './global.css';

export function App() {
    return (
        <div>
           <Header />
            <div className={styles.wrapper}>
                <main>
                    <FormCreateList />
                </main>
            </div>
        </div>
    );
}
