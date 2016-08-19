import React from 'react';
var {Link, IndexLink} = require('react-router');

import Jumbotron from '../Jumbotron.jsx';

require('./Total.css')

const data = {
	img: "img/techbridge_white.png",
	title: "COURSE",
	subtitle: "교육과정",
	content: "아이들의 생각을 실현하는 놀이터, 테크브릿지"
}

export default class Total extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <div id="course-total">
				<Jumbotron img={data.img} title={data.title} subtitle={data.subtitle} content={data.content} />
        <div className="row content">
          <div className="col-md-4">
            <p className="course-title">Tech<br />Starter</p>
            <p className="course-term">20주</p>
          </div>
          <div className="col-md-8 course-data">
            <table className="table">
              <colgroup>
                <col width="30%" />
                <col width="30%" />
                <col width="20%" />
                <col width="20%" />
              </colgroup>
              <thead>
                <tr>
                  <th>과정</th>
                  <th>대상</th>
                  <th>기간</th>
                  <th>매주</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SAM Labs</td>
                  <td>초1 이상</td>
                  <td>8주</td>
                  <td>90분</td>
                </tr>
                <tr>
                  <td>Scratch</td>
                  <td>초1 이상</td>
                  <td>12주</td>
                  <td>90분</td>
                </tr>
              </tbody>
            </table>
            <Link to="/course/starter/sam">자세히 알아보기 >></Link>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-4">
            <p className="course-title">Tech<br />Pro</p>
            <p className="course-term">24주</p>
          </div>
          <div className="col-md-8 course-data">
            <table className="table">
              <colgroup>
                <col width="30%" />
                <col width="30%" />
                <col width="20%" />
                <col width="20%" />
              </colgroup>
              <thead>
                <tr>
                  <th>과정</th>
                  <th>대상</th>
                  <th>기간</th>
                  <th>매주</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Web</td>
                  <td>초4 이상</td>
                  <td>12주</td>
                  <td>90분</td>
                </tr>
                <tr>
                  <td>파이썬</td>
                  <td>초6 이상</td>
                  <td>12주</td>
                  <td>90분</td>
                </tr>
              </tbody>
            </table>
            <Link to="/course/pro/web">자세히 알아보기 >></Link>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-4">
            <p className="course-title">Tech<br />Master</p>
            <p className="course-term">36주</p>
          </div>
          <div className="col-md-8 course-data">
            <table className="table">
              <colgroup>
                <col width="30%" />
                <col width="30%" />
                <col width="20%" />
                <col width="20%" />
              </colgroup>
              <thead>
                <tr>
                  <th>과정</th>
                  <th>대상</th>
                  <th>기간</th>
                  <th>매주</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Web 개발</td>
                  <td>중1 이상</td>
                  <td>12주</td>
                  <td>180분</td>
                </tr>
                <tr>
                  <td>Android 개발</td>
                  <td>중1 이상</td>
                  <td>24주</td>
                  <td>180분</td>
                </tr>
              </tbody>
            </table>
            <Link to="/course/master/webdev">자세히 알아보기 >></Link>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-4">
            <p className="course-title">AP</p>
            <p className="course-term">12주</p>
          </div>
          <div className="col-md-8 course-data">
            <table className="table">
              <colgroup>
                <col width="30%" />
                <col width="30%" />
                <col width="20%" />
                <col width="20%" />
              </colgroup>
              <thead>
                <tr>
                  <th>과정</th>
                  <th>대상</th>
                  <th>기간</th>
                  <th>매주</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ap</td>
                  <td>중1 이상</td>
                  <td>12주</td>
                  <td>180분</td>
                </tr>
              </tbody>
            </table>
            <Link to="/course/ap/ap">자세히 알아보기 >></Link>
          </div>
        </div>
      </div>
		);
	}
}
