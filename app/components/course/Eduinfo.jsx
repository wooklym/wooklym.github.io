import React from 'react';

require('./Eduinfo.css');

export default class Eduinfo extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.updateView(this.props.eduinfo)
	}

	componentWillReceiveProps(props) {
		this.updateView(props.eduinfo)
	}

	updateView(eduinfo) {
		let eduMedia;
		const {image, imageBorder, youtube, vimeo} = eduinfo;

		if (imageBorder && image.length > 0) {
      eduMedia = (
        <div className="col-md-6 border">
          <img src={image} className="img-responsive center-block"/>
        </div>
      );
		} else if (image.length > 0) {
      eduMedia = (
        <div className="col-md-6">
          <img src={image} className="img-responsive center-block"/>
        </div>
      );
    } else if (youtube.length > 0) {
      eduMedia = (
        <div className="col-md-6 youtube-wrapper">
          <iframe src={youtube} frameBorder="0" allowFullScreen className="center-block"></iframe>
        </div>
      );
    } else {
      eduMedia = (
        <div className="col-md-6 youtube-wrapper">
          <iframe src={vimeo} frameBorder="0" allowFullScreen></iframe>
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
