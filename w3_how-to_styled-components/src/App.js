//  GLOBAL-STYLES
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//  REACT-ICONS
// import { FaHome } from "react-icons/fa";

//  NAVBAR
import { Navbar } from './components';

//  COMPONENTS
import IconBar from "./components/IconBar/IconBar";



function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
        <div id="screen">
          <Navbar />
          <Switch>
            <Route path='/' exact />
            <Route path='/iconbar' exact component={IconBar} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
