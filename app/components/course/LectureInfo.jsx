import React from 'react';

require('./LectureInfo.css');

export default class CampInfo extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
      <section id="lecture-info">
				<p className="lecture-title ">{this.props.info.title}</p>
				<p className="lecture-subtitle">{this.props.info.subtitle}</p>
        <div className="row">
          <div className="col-md-6 info-left">
            <p>{this.props.info.desc}</p>
          </div>
          <dl className="col-md-6 lecture-info">
            <div className="row">
							<dl>
								<dt className="col-sm-2">대상</dt>
	              <dd className="col-sm-10">{this.props.info.target}</dd>

								<dt className="col-sm-2">기간</dt>
	              <dd className="col-sm-10">{this.props.info.term}</dd>

								<dt className="col-sm-2">시간</dt>
	              <dd className="col-sm-10">{this.props.info.time}</dd>

	              <dt className="col-sm-2">준비물</dt>
	              <dd className="col-sm-10">{this.props.info.needed}</dd>
							</dl>
            </div>
          </dl>
        </div>
      </section>
		);
	}
}
