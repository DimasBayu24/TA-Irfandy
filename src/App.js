import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Hero, Footer } from "./components";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Recipe from "./pages/Recipe/Recipe";
import Order from "./pages/Order/Order";
import TodayMenu from "./pages/TodayMenu/TodayMenu";
import GlobalStyles from "./Globalstyles";
import AuthService from "./services/auth.service";
import React, { useState, useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };
  return (
    <Router>
      <GlobalStyles />

      <Hero />
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route exact path="/about" exact component={About} />
        <Route exact path="/recipe" exact component={Recipe} />
        <Route exact path="/order-now" exact component={Order} />
        <Route exact path="/menu" exact component={TodayMenu} />
        <Route exact path="/login" exact component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
