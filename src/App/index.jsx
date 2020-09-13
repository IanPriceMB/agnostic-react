import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Header } from '../components';
import { UserContext, Users, SignIn } from '../containers';

export default () => {
  return (
    <div className="app">
      <Router>
        <header className="app__header">
          <Header />
        </header>
        <Switch>
          <Route exact path="/sign-in" component={SignIn} />
          <Route path="/">
            <UserContext>
              <main className="app__main">
              <Switch>
                <Route path="/users" component={Users} />
                <Route exact path="/">
                  <Redirect to="/users" />
                </Route>
              </Switch>
              </main>
            </UserContext>  
          </Route>
        </Switch>
      </Router>
    </div>
  );
}