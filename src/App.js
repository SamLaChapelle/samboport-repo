import "./main css/App.css";
import Header from "./components/header.js";
import Code from "./components/code.js";
import Work from "./components/work.js";

function App() {
  return (
    <div className="App">
      <p id="htmlTextOne">&lt;html&gt;</p>
      <p id="bodyTextOne">&lt;body&gt;</p>
      <p id="headerTextOne">&lt;header&gt;</p>
      <Header />
      <p id="headerTextTwo">&lt;/header&gt;</p>
      <p id="projectsTextOne">&lt;projects&gt;</p>
      <Code />
      <p id="projectsTextTwo">&lt;/projects&gt;</p>
      <p id="workTextOne">&lt;work&gt;</p>
      <Work />
      <p id="workTextTwo">&lt;/work&gt;</p>
      <p id="bodyTextTwo">&lt;/body&gt;</p>
      <p id="htmlTextTwo">&lt;/html&gt;</p>
    </div>
  );
}

export default App;
