import React, { useState } from "react";
import "./App.css";
import { NavBar, LogoBox, Footer } from "./Components";
import {
  Fitness,
  Yoga,
  Therapy,
  Meditation,
  Mindfulness,
  Home,
  Explore,
  Addevent,
  Admin,
} from "./Containers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const changedLogging = () => {
    setIsLogged(!isLogged);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar changedLogging={changedLogging} isLogged={isLogged} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home changedLogging={changedLogging} isLogged={isLogged} />
              </>
            }
          />
          <Route
            exact
            path="/home"
            element={
              <>
                <Home changedLogging={changedLogging} isLogged={isLogged} />
              </>
            }
          />
          <Route exact path="/explore" element={<Explore />} />
          <Route
            exact
            path="/fitness"
            element={
              !isLogged ? (
                <Home />
              ) : (
                <>
                  <LogoBox />
                  <Fitness />
                </>
              )
            }
          />
          <Route
            exact
            path="/yoga"
            element={
              !isLogged ? (
                <Home />
              ) : (
                <>
                  <LogoBox />
                  <Yoga />
                </>
              )
            }
          />
          <Route
            exact
            path="/therapy"
            element={
              !isLogged ? (
                <Home />
              ) : (
                <>
                  <LogoBox />
                  <Therapy />
                </>
              )
            }
          />

          <Route
            exact
            path="/meditation"
            element={
              !isLogged ? (
                <Home />
              ) : (
                <>
                  <LogoBox />
                  <Meditation />
                </>
              )
            }
          />
          <Route
            exact
            path="/mindfulness"
            element={
              !isLogged ? (
                <Home />
              ) : (
                <>
                  <LogoBox />
                  <Mindfulness />
                </>
              )
            }
          />
          <Route
            path="/admin/:type"
            element={!isLogged ? <Home /> : <Admin isLogged={isLogged} />}
          />
          <Route
            exact
            path="/admin"
            element={!isLogged ? <Home /> : <Addevent isLogged={isLogged} />}
          /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

