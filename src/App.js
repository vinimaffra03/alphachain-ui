import Header from "./components/Header/Header";
import RecursosPremium from "./components/RecursosPremium/RecursosPremium";
import Section from "./components/Section/Section";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Section />
        <RecursosPremium />
      </div>
    </div>
  );
}

export default App;
