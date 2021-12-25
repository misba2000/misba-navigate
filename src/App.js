import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import { Switch,Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route path={"/Skills"} component={Skills}  />
          <Route path={"/AboutMe"} component={AboutMe}  />
      <Route path={"/home"} component={Home}  />
      
      
      </Switch>
      
    </div>
  );
}

export default App;
