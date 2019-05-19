import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/home/home';
import { Register } from './components/home/register';
import { Login } from './components/home/login';
import About from './components/home/about';
import { Price } from './components/home/price'


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/about' component={About} />
            <Route exact path='/pricing' component={Price} />
      </Layout>
    );
  }
}
