import "./main css/App.css";
import Header from "./components/header.js";
import Code from "./components/code.js";
import Work from "./components/work.js";
import About from "./components/about.js";
import { ThemeProvider, createTheme } from "@mui/material";

const muiButtons = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={muiButtons}>
      <div className="App">
        <Header />
        <p id="headerTextTwo" className="divText">
          &lt;/header&gt;
        </p>
        <p id="projectsTextOne" className="divText">
          &lt;projects&gt;
        </p>
        <Code />
        <p id="projectsTextTwo" className="divText">
          &lt;/projects&gt;
        </p>
        <p id="workTextOne" className="divText">
          &lt;work&gt;
        </p>
        <Work />
        <p id="workTextTwo" className="divText">
          &lt;/work&gt;
        </p>
        <p id="aboutTextTwo" className="divText">
          &lt;about&gt;
        </p>
        <About />
        <p id="aboutTextTwo" className="divText">
          &lt;/about&gt;
        </p>
        <p id="bodyTextTwo" className="divText">
          &lt;/body&gt;
        </p>
        <p id="htmlTextTwo" className="divText">
          &lt;/html&gt;
        </p>
      </div>
    </ThemeProvider>
  );
}

export default App;
