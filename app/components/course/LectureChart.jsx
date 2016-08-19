import React from 'react';
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

export default class LectureChart extends React.Component {
	render() {
		return (
      <section id="lecture-chart">
				<p className="title">교육효과</p>
        <div className="row">
					<div className="col-md-6">
						<Radar data={this.props.chart.data} options={chartOptions} />
          </div>
					<dl className="col-md-6">
						<div className="row">
							{
								this.props.chart.desc.map((desc) => {
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
