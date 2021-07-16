import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Register } from "./components/pages/Register";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register">
          <ChakraProvider>
            <Register />
          </ChakraProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
