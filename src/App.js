import React from 'react';
import './App.css'
import { Route } from "react-router-dom";

import Shelves from './shelves.js'
import Search from './search.js'
class BooksApp extends React.Component {


  render() {
    return (
      <div className="app">

        <Route path="/" exact component={Shelves} />
        <Route path="/search" component={Search} />
      </div>
    )
  }

}

export default BooksApp
