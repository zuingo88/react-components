//  GLOBAL-STYLES
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//  NAVBAR
import { Navbar } from './components';

//  COMPONENTS
import IconBar from "./components/IconBar/IconBar";
import Table from "./components/Table/Table";
import Chart from './components/Chart/Chart';
import MySlate from "./components/MySlate/MySlate";
import MyPlate from './components/MyPlate/MyPlate';
import MyCKEditor from "./components/MyCKEditor/MyCKEditor";
import StyledSystem from './components/StyledSystem/StyledSystem';
import MyRedux from "./components/MyRedux/MyRedux.jsx";

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
            <Route path='/table' exact component={Table} />
            <Route path='/chart' exact component={Chart} />
            <Route path='/myslate' exact component={MySlate} />
            <Route path='/myplate' exact component={MyPlate} />
            <Route path='/myckeditor' exact component={MyCKEditor} />
            <Route path='/styledsystem' exact component={StyledSystem} />
            <Route path='/myredux' exact component={MyRedux} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
