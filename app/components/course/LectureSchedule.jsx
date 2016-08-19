import React from 'react';

require('./LectureSchedule.css');

export default class LectureSchedule extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
      <section id="lecture-schedule">
				<p className="title">강의일정</p>
        <div className="row">
					<div className="col-md-6">
						<p>매 주 토요일</p>
          </div>
					<dl className="col-md-6">
						<div className="row">
						</div>
					</dl>
        </div>
      </section>
		);
	}
}
