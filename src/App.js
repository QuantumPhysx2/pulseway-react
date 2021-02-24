// --- Global CSS ---
import './App.css';
// --- Components ---
import Sidenav from './components/Sidenav';

export default function App() {
    return (
        <div className="container">
            <header></header>
            <aside>
                <Sidenav />
            </aside>
            <main></main>
            <footer></footer>
        </div>
    );
}