import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import App from '../App';
import Register from '../Register/Register';

export class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={App}/>
        <Route path='/register' component={Register}/>
      </BrowserRouter>
    )
  }
}
