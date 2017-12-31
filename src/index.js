require('purecss/build/pure-min.css');
require('purecss/build/grids-responsive-min.css');
require('./main.css');
// require('font-awesome-webpack');
require('./fh5co.js');


const element = (
  <div className="header">
    <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
      <a className="pure-menu-heading" href="">Your Site</a>

      <ul className="pure-menu-list">
        <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li>
        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Tour</a></li>
        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sign Up</a></li>
      </ul>
    </div>
  </div>);

ReactDOM.render(
  element,
  document.getElementById('header')
);


$('.pure-menu-list .pure-menu-item').removeClass('pure-menu-selected');
