import React from "react";

//style:
import "./scss/main.scss";

//komponenty stałe:
import Header from "./components/Header";
import Footer from "./components/Footer";
//podstrony:
import Index from "./pages/Index";
import Trainers from "./pages/Trainers";
import Trainings from "./pages/Trainings";
import Contact from "./pages/Contact";

//zmienne:
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
          {/* <Route exact path="/index" component={Index} />
          <Route exact path="/trainers" component={Trainers} />
          <Route exact path="/trainings" component={Trainings} />
          <Route exact path="/contact" component={Contact} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
