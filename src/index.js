require('purecss/build/pure-min.css');
require('purecss/build/grids-responsive-min.css');
require('./main.css');
// require('font-awesome-webpack');

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div className="splash-container">
    <div className="splash">
      <h1 className="splash-head">Big Bold Text</h1>
      <p className="splash-subhead">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <p>
        <a href="http://purecss.io" className="pure-button pure-button-primary">Get Started</a>
      </p>
    </div>
  </div>,
  document.getElementById('root')
);
