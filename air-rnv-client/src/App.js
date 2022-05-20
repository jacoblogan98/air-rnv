import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import ListRv from "./pages/ListRv";
import Details from "./pages/Details";

function App() {
  const history = useHistory();
  const [rvList, setRvList] = useState([]);

  useEffect(() => {
    fetch("/rvs")
      .then((res) => res.json())
      .then((data) => setRvList(data));
  }, []);

  const handleCardClick = (id) => {
    history.push(`/details/${id}`)
  };

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home rvList={rvList} handleCardClick={handleCardClick} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/listRv">
          <ListRv />
        </Route>
        <Route exact path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
