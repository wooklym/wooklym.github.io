import React from 'react';

require('./Jumbotron.css')

export default class Jumbotron extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    const { img, subtitle, content } = this.props;
		return (
			<div className="jumbotron">
				<img src={img} className="img-responsive center-block"/>
				<p className="content">
					초중등학생에게 최적화된 코딩교육을 제공하고자 하는 목표로 설립된 교육 기관으로,<br />
				<b>PBL(Project Based Learning)</b>을 기반으로 자신의 생각을 테크로 실현하는 놀이터입니다.
				</p>
			</div>
		);
	}
}
