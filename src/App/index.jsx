import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Users, SignIn, AddUserModal, DeleteUserModal } from '../containers';
import { Header } from '../components';
import './index.scss'

export default () => {
  return (
    <>
    <div className="app">
      <Router>
        <header className="app__header">
          <Header />
        </header>
        <Switch>
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/">
            <Redirect to="/sign-in" />
          </Route>
          <Route path="/">
            <main className="app__main">
            <Switch>
              <Route path="/:userType" component={Users} />
            </Switch>
            </main>
            <Route path={`/:userType/create`} component={AddUserModal} />
            <Route path={`/:userType/delete/:userId`} component={DeleteUserModal} />
          </Route>
        </Switch>
      </Router>
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}