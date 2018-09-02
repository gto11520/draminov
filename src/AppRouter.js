import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';

import { history } from './helpers/history';
import Home from './home/Home';
import Clinic from './clinic/Clinic';
import Services from './services/Services';
import Doctors from './doctors/Doctors';
import Testimonals from './testimonals/Testimonals';
import Blogs from './blogs/Blogs';
import Contact from './contact/Contact';
import Header from './components/Header';

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/clinic" component={Clinic} />
        <Route path="/doctors" component={Doctors} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
