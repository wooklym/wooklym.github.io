import React from 'react';

require('../swiper.min.css');
require('../swiper.min.js');
require('./Home.css')

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				slidesPerView: 1,
				paginationClickable: true,
				loop: true,
				autoHeight: true,
				autoplay: 3000,
				autoplayDisableOnInteraction: false
		});
	}

	handleClick() {
    window.open("http://camp.techbridge.co.kr/");
  }

	render() {
		return (
			<section id="home">
				<div className="swiper-container">
	        <div className="swiper-wrapper">
	            <div className="swiper-slide">
								<img src="img/slide1.jpg" />
	            </div>
							<div className="swiper-slide">
								<img src="img/slide2.jpg" />
	            </div>
							<div className="swiper-slide">
								<img src="img/slide3.jpg" />
	            </div>
	        </div>
	        <div className="swiper-pagination"></div>
    		</div>
				<div className="row mt-4">
					<div className="col-md-6">
						<p className="title">코딩이란?</p>
						<p>
							코딩이란 컴퓨터 언어로 컴퓨터와 소통하는 것을 의미합니다. 컴퓨터의 세계에는 오직 ‘0’과 ‘1’만이 존재합니다. 컴퓨터가 하는 일을 이해하거나, 컴퓨터에게 무언가를 시키고 싶다면 컴퓨터가 알아들을 수 있는 언어를 사용해야 합니다. 이 언어를 ‘<b>코드</b>(컴퓨터 언어)’라고 하며, 코드를 사용해 프로그램을 만드는 과정을 ‘<b>코딩</b>’이라고 합니다.
						</p>
					</div>
					<div className="col-md-6 youtube-wrapper">
						<iframe src="https://www.youtube.com/embed/iubovdnLmqU" frameBorder="0" allowFullScreen className="center-block"></iframe>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-xs-12">
						<p className="title">왜 배워야 하나요?</p>
						<img src="img/why.jpg" className="center-block img-responsive" />
					</div>
				</div>
				{
					/*
					<div className="row mt-4">
						<div className="col-xs-12">
							<p className="title">언제 배우는게 좋을까요?</p>
						</div>
					</div>
					*/
				}
				<div className="row mt-4">
					<div className="col-xs-12">
						<p className="title">어떻게 배워야 할까요?</p>
						<p>
							아이들의 흥미를 끊임 없이 유발시켜 자기 주도적으로 문제를 해결할 수 있게 해야합니다. 테크브릿지에서는 <b>4P Based Learning</b> 교육법을 통해 이를 실현하고 있습니다.
						</p>
						<img src="img/4p1.jpg" className="center-block img-responsive col-sm-6" />
						<img src="img/4p2.jpg" className="center-block img-responsive col-sm-6" />
						<img src="img/4p3.jpg" className="center-block img-responsive col-sm-6" />
						<img src="img/4p4.jpg" className="center-block img-responsive col-sm-6" />
					</div>
				</div>
			</section>
		);
	}
}
