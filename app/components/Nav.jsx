var React = require('react');
var {Link, IndexLink} = require('react-router');

require('./Nav.css');

export default class Nav extends React.Component {

  componentDidMount() {
    var navMain = $('div.navbar-collapse');
    navMain.on("click", "a", null, function () {
       navMain.collapse('hide');
    });
  }

  render() {
    return (
      <nav id="nav" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink className="navbar-brand" to="/">
              <img alt="Logo" src="img/logo.png" />
            </IndexLink>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link activeClassName="active" to="about">ABOUT US</Link>
              </li>
              <li>
                <Link activeClassName="active" to="course">COURSE</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

module.exports = Nav;
