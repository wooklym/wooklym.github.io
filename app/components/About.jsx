import React from 'react';

import Jumbotron from './Jumbotron.jsx';

require('./About.css')

export default class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="about">
				<Jumbotron img="img/techbridge_white.png" />
				<div className="content">
					<p className="about-title mt-4">VISION</p>
					<div className="row">
						<div className="col-md-offset-3 col-md-9">
							<p>테크브릿지는 재미있는 교육을 추구합니다.</p>
							<p>테크브릿지는 놀이터와 같은 자발적인 배움의 공간입니다.</p>
							<p>테크브릿지는 사람을 먼저 생각하는 사고를 키우는 교육 기관입니다.</p>
							<div className="row mt-3">
								<div className="col-sm-4">
									<img src="img/humanities.png" className="img-responsive center-block" />
								</div>
								<div className="col-sm-4">
									<img src="img/tech.png" className="img-responsive center-block" />
								</div>
								<div className="col-md-4">
									<img src="img/entreprenerd.png" className="img-responsive center-block" />
								</div>
							</div>
						</div>
					</div>
					<p className="about-title mt-4">교육방식</p>
					<div className="row">
						<div className="col-md-offset-3 col-md-9">
							<p className="fw-4">4P Based Learning</p>
							<p>(Play - ProjectBasedLearning = Problrem Finding - Practical)</p>
							<img src="img/4p.jpg" className="img-responsive mt-3" />
						</div>
					</div>
					<p className="about-title mt-4">History</p>
					<div className="row">
						<div className="col-md-offset-3 col-md-1 year">
							2015
						</div>
						<div className="col-md-8">
							<p>10월 대치동에서 오픈</p>
						</div>
					</div>
					<div className="row mt-2">
						<div className="col-md-offset-3 col-md-1 year">
							2016
						</div>
						<div className="col-md-8">
							<p>1월 SAM Labs를 이용한 어린이 코딩 교육 제공</p>
							<p>4월 SAM Labs 판매 독점권 유치 지원 및 교육 사업 독점권</p>
							<p>4월 영국 비영리재단 코드클럽 한국 브랜치 런칭 제휴 진행 중</p>
							<p>8월 제 1회 Tech Camp 개최 예정</p>
						</div>
					</div>
					<div className="row mt-2">
						<div className="col-md-offset-3 col-md-1 year">
							현재
						</div>
						<div className="col-md-8">
							<p>영국 어린이 코딩교육 업체(Funtech)와 커리큘럼 도입 중비 중</p>
						</div>
					</div>
					<p className="about-title mt-4">PARTNERS</p>
					<div className="row">
						<div className="col-md-offset-3 col-sm-2 logo-wrapper">
							<a href="http://www.umrb.co.kr/" target="_blank">
								<img src="img/mommolang_logo.png" className="img-responsive center-block" />
							</a>
						</div>
						<div className="col-sm-2 logo-wrapper">
							<a href="http://honghapvalley.org/" target="_blank">
								<img src="img/honghap_logo.png" className="img-responsive center-block" />
							</a>
						</div>
						<div className="col-sm-2 logo-wrapper">
							<a href="https://www.samlabs.com/" target="_blank" className="sam-logo">
								<img src="img/sam_logo.png" className="img-responsive center-block" />
							</a>
						</div>
						<div className="col-sm-3 logo-wrapper">
							<a href="http://funtechsummercamps.com/" target="_blank" className="funtech-logo">
								<img src="img/funtech_logo.png" className="img-responsive center-block" />
							</a>
						</div>
						<div className="col-sm-3 logo-wrapper">
							<a href="http://goals92.wix.com/d-wyv" target="_blank" className="dwyv-logo">
								<img src="img/dwyv_logo.png" className="img-responsive center-block" />
							</a>
						</div>
					</div>
					<p className="about-title mt-4">CONTACT</p>
					<div className="row contact">
						<div className="col-md-offset-3 col-md-4">
		          <dl className="mt-3">
		            <dt>사업자번호</dt>
		            <dd>154-86-00242</dd>
		            <dt>통신판매업신고</dt>
		            <dd>2016-서울마포-1230호</dd>
		          </dl>
		        </div>
						<div className="col-md-5">
							<dl className="mt-1">
								<dt><img src="img/pin.png" alt="" className="img-responsive icon" /></dt>
								<dd>서울특별시 마포구 월드컵북로4길 77</dd>
								<dt><img src="img/phone.png" alt="" className="img-responsive icon" /></dt>
								<dd>070 - 4792 - 5111</dd>
								<dt><img src="img/mail.png" alt="" className="img-responsive icon" /></dt>
								<dd>contact@techbridge.co.kr</dd>
								<dt><img src="img/kakaotalk.png" alt="" className="img-responsive icon" /></dt>
								<dd>techbridge</dd>
							</dl>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
