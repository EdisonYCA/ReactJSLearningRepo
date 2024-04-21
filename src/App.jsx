import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton  from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data";

function App() {
  let tabContent = "Please Click a Button!";
  function selected(component){
    tabContent = component;
}

  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id="core-concepts">
        <ul>
          <CoreConcepts {...CORE_CONCEPTS[0]}/>
          <CoreConcepts {...CORE_CONCEPTS[1]}/>
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/>
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
            <TabButton onSelect={() => selected("components")}>Components</TabButton>
            <TabButton onSelect={() => selected("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => selected("props")}>Props</TabButton>
            <TabButton onSelect={() => selected("states")}>States</TabButton>
        </menu>
        {tabContent}
      </section>
    </div>
  );
}

export default App;
