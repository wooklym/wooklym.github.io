var React = require('react');
var {Link, IndexLink} = require('react-router');

require('./Subnav.css');

export default class Subnav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav id="subnav">
        <ul className="nav nav-pills nav-justified">
          {
            this.props.menus.map((menu) => {
              return (
                <li key={menu.path} role="presentation">
                  <Link to={menu.path} activeClassName="active">{menu.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    );
  }
}
