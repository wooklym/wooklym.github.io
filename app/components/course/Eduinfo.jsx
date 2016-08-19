import React from 'react';

require('./Eduinfo.css');

export default class Eduinfo extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		let eduMedia;

		if (this.props.eduinfo.image.length > 0) {
      eduMedia = (
        <div className="col-md-6 youtube-wrapper">
          <img src={this.props.eduinfo.image} className="img-responsive center-block"/>
        </div>
      );
    } else if (this.props.eduinfo.youtube.length > 0) {
      eduMedia = (
        <div className="col-md-6 youtube-wrapper">
          <iframe src={this.props.eduinfo.youtube} frameBorder="0" allowFullScreen className="center-block"></iframe>
        </div>
      );
    } else {
      eduMedia = (
        <div className="col-md-6 youtube-wrapper">
          <iframe src={this.props.eduinfo.vimeo} frameBorder="0" allowFullScreen></iframe>
        </div>
      );
    }

		this.setState({
			eduMedia: eduMedia
		});
	}

	componentWillReceiveProps(props) {
		let eduMedia;
		if (props.eduinfo.image.length > 0) {
      eduMedia = (
        <div className="col-md-6">
          <img src={props.eduinfo.image} className="img-responsive center-block"/>
        </div>
      );
    } else if (props.eduinfo.youtube.length > 0) {
      eduMedia = (
        <div className="col-md-6 youtube-wrapper">
          <iframe src={props.eduinfo.youtube} frameBorder="0" allowFullScreen className="center-block"></iframe>
        </div>
      );
    } else {
      eduMedia = (
        <div className="col-md-6 youtube-wrapper">
          <iframe src={props.eduinfo.vimeo} frameBorder="0" allowFullScreen></iframe>
        </div>
      );
    }

		this.setState({
			eduMedia: eduMedia
		});
	}

	render() {
		return (
      <section id="eduinfo">
        <div className="row">
          <div className="col-md-6">
						<p className="title">
							교육내용
						</p>
            <p>
              {this.props.eduinfo.desc}
            </p>
          </div>
          {this.state.eduMedia}
        </div>
      </section>
		);
	}
}
