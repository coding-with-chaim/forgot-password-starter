import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Signup from "./routes/Signup";
import Private from "./routes/private";
import Login from "./routes/Login";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Container>
            <Route exact path="/" component={Private} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Container>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
