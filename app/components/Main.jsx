import React from 'react';
import Nav from './Nav.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import BriefingBox from './BriefingBox.jsx';

require('./Main.css');

export default class Main extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="container">
        <Nav/>
        {this.props.children}
        <Footer />
        <BriefingBox />
      </div>
    );
  }
}
