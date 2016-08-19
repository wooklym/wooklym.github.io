var React = require('react');

require('./Footer.css');

var Header = (props) => {
  return (
    <footer>
      <div className="container-fluid copywrite">
        &#169;2016 Techbridge. All rights reserved.
      </div>
    </footer>
  );
}

module.exports = Header;
