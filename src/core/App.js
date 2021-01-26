import AppBody from "../components/appBody/AppBody";
import "./App.css";

const appTitle = <h1 className="app-title">LiveJournal Brother Tool</h1>;

function App() {
  return (
    <main>
      {appTitle}
      <AppBody />
    </main>
  );
}

export default App;
