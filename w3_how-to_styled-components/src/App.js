import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//  NAVBAR
import { Navbar } from './components';

//  COMPONENTS
import IconBar from "./components/IconBar/IconBar";

function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
          <Route path='/iconbar' exact component={IconBar} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
