import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <small>
          <a
            href="https://github.com/beerbumm/dictionary-project"
            target="_blank"
            rel="noreferrer"
            id="github-link"
          >
            Open source code{" "}
          </a>
          by Chelsea Watson
        </small>
      </footer>
    </div>
  );
}

export default App;
