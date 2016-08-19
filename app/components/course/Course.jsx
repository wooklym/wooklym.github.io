import React from 'react';
var {Link, IndexLink} = require('react-router');

require('./Course.css')

export default class Course extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="course">
				{this.props.children}
			</section>
		);
	}
}
