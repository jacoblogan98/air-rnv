import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import ListRv from "./pages/ListRv"

function App() {
  const [rvList, setRvList] = useState([]);

  useEffect(() => {
    fetch("/rvs")
      .then((res) => res.json())
      .then((data) => setRvList(data));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home rvList={rvList} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/listRv">
          <ListRv />
        </Route>
      </Switch>
      {/* <Breadcrumb variant="rosewood">
        <Breadcrumb.Item>Test</Breadcrumb.Item>
      </Breadcrumb>
      <Alert variant="rosewood">This is a button</Alert>
      <Button variant="maple" className="m-2" id="btn-maple">
        Button
      </Button>
      <Button variant="olive" className="m-2" id="btn-olive">
        Button
      </Button>
      <Button variant="rosewood" className="m-2" id="btn-rosewood">
        Button
      </Button>
      <Button variant="cherry" className="m-2" id="btn-cherry">
        Button
      </Button>
      <Button variant="sand" className="m-2" id="btn-sand">
        Button
      </Button> */}
    </div>
  );
}

export default App;
