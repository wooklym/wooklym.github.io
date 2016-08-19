import React from 'react';

require('./BriefingBox.css')

export default class BriefingBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <div className="briefing-box">
        강의 신청 <a href="https://goo.gl/forms/M8AeR0rviwdFAxWl1" target="_blank">바로가기</a>
      </div>
		);
	}
}
