import './App.css';
import Weather from './Weather';

function App() {
    return (
        <div className="App">
            <div className="container">
                <Weather />
                <footer>
                    Coded by Hedi.sgh and is{' '}
                    <a
                        href="https://github.com/hedie-sg/new-react-weather-app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        open-sourced
                    </a>
                </footer>
            </div>
        </div>
    );
}

export default App;
