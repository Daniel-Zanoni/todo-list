import { Header } from './components/Header';
import { FormCreateList } from './components/FormCreateList';
import { HeaderList } from './components/HeaderList';
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
                    <HeaderList />
                    <EmptyList />
                </main>
            </div>
        </div>
    );
}
