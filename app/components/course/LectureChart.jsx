import React from 'react';
import _ from 'underscore';
import {Radar} from 'react-chartjs'

require('./LectureChart.css');

const chartOptions = {
	responsive: true,
	legend: {
		display: false,
	},
	scale: {
		reverse: false,
		ticks: {
			beginAtZero: true
		}
	}
}

const chartLabels = ["창의적 사고", "융합적 사고", "논리적 사고", "문제해결 능력", "개발 응용 능력"];

export default class LectureChart extends React.Component {
	constructor (props) {
		super(props)

		this.state = {justUpdated: false}
	}

	componentDidMount () {
		this.setState({
			justUpdated: true
		})
	}

	componentWillReceiveProps () {
		this.setState({justUpdated: false})
	}

	componentWillUpdate (nextProps, nextState) {
		if (!nextState.justUpdated) {
			this.setState({justUpdated: true})
		}
	}

	render() {
		const { chart } = this.props
		const {justUpdated} = this.state;

		return (
      <section id="lecture-chart">
				<p className="title">교육효과</p>
        <div className="row">
					<div className="col-md-6">
						{justUpdated && <Radar data={chart.data} options={chartOptions} />}
          </div>
					<dl className="col-md-6">
						<div className="row">
							{
								chart.desc.map((desc) => {
									return (
										<dl key={desc.title}>
											<dt className="col-sm-4 mt-1">{desc.title}</dt>
											<dd className="col-sm-8 mt-1">{desc.content}</dd>
										</dl>
									)
								})
							}
						</div>
					</dl>
        </div>
      </section>
		);
	}
}
