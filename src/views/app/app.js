import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {  connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import Header from '../components/header'
import Recipes from '../pages/recipes'
import CreateRecipe from '../pages/create-recipe'
import Single from '../pages/single-recipe'
import NoMatch from '../pages/no-match'

import actionCreators from '../../actions'

import './app.css'

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const App = (props) => {
  const baseUrl = process.env.PUBLIC_URL;
  return (
    <div className="App">
      <BrowserRouter basename={baseUrl}>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path={`/`} render={() => <Recipes {...props}/>} />
              <Route path={`/recipe/:id`} render={({match}) => <Single {...match} {...props}/>} />
              <Route path={`/create`} render={() => <CreateRecipe {...props}/>} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

const Root = connect(mapStateToProps, mapDispatchToProps)(App);

export default Root;
