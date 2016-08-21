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

	componentWillMount() {
		const {chart} = this.props;
		this.setState({
			chart: chart
		});
	}

	componentWillUnmount() {
    this.state.chart.destroy();
  }

	// componentWillReceiveProps(props) {
	// 	const {chart} = props;
	// 	this.setState({
	// 		chart: chart
	// 	});
	// }
	// 
	render() {
		const chart = this.state.chart;
		return (
      <section id="lecture-chart">
				<p className="title">교육효과</p>
        <div className="row">
					<div className="col-md-6">
						<Radar data={chart.data} options={chartOptions} />
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
