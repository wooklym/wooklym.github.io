import React from 'react';

import Subnav from '../Subnav.jsx';
import LectureInfo from './LectureInfo.jsx';
import LectureChart from './LectureChart.jsx';
import Eduinfo from './Eduinfo.jsx';
import LectureSchedule from './LectureSchedule.jsx';

require('./Poster.css');

var data = {
	sam: {
	  info: {
	    title: "SAM Labs",
	    subtitle: "Tech Starter",
			desc: "Physical Computing을 통해 손으로 직접 모듈을 조합하며 창의력과 논리적 사고 능력을 기르고, 프로그래밍에 대한 기본적인 소양을 개념을 학습할 수 있습니다.",
			target: "초등학교 1학년 이상 친구들",
	    needed: "노트북",
			term: "8주",
			time: "매주 90분"
	  },
	  eduinfo: {
	    desc: "아이들에게 어려운 코드 타이핑 과정 없이도 컴퓨터적 사고 능력과 창의력을 기를 수 있습니다. 특히 SAM을 통해 앞으로 보편화될 IoT 기술을 활용하여 나만 열 수 있는 금고, 운전할 수 있는 자동차 등을 만들고 놀면서 자연스럽게 기술을 배울 수 있습니다.",
	    image: "",
	    youtube: "https://www.youtube.com/embed/43ps5GV_rJk"
	  },
		chart: {
			data: {
		    labels: ["창의적 사고", "융합적 사고", "논리적 사고", "문제해결 능력", "개발 응용 능력"],
		    datasets: [
	        {
	          label: "교육효과",
						fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
	          data: [100, 75, 90, 80, 40]
	        }
		    ]
			},
			desc: [
				{
					title: "창의적 사고",
					content: "여러 모듈들을 어떻게 조합할지 고민하고, 스스로 만들어보며 창의적 사고 능력을 기를 수 있습니다."
				},
				{
					title: "문제해결 능력",
					content: "주어진 모듈과 프로그래밍 적 기능을 통해 스스로 문제를 해결하며 문제해결 능력을 기를 수 있습니다."
				},
				{
					title: "논리적 사고",
					content: "문제 해결을 위해 컴퓨터적 사고를 하는 과정에서 논리적 사고 능력을 기를 수 있습니다."
				}
			]
		}
	},
	scratch: {
	  info: {
	    title: "Scratch",
	    subtitle: "Tech Starter",
	    desc: "스크래치는 MIT 미디어 연구소에서 만든 어린이 교육용 프로그래밍 언어입니다. 일반적인 프로그래밍 언어에서 프로그램을 만들려면 아이들이 직접 일일이 코드를 타이핑해야 하지만, 스크래치에서는 명령이 블록으로 만들어져 있어서 마우스를 이용하여 쉽게 프로그램을 만들 수 있습니다. 특히 게임이나 애니메이션과 같은 것을 쉽게 만들 수 있도록 고안되어 있기 때문에 어렵지 않게 프로그래밍 기법들을 익힐 수 있습니다.",
			target: "초등학교 1학년 이상 친구들",
	    needed: "노트북",
			term: "12주",
			time: "매주 90분"
	  },
	  eduinfo: {
	    desc: "연주하고 노래하는 밴드 만들기, 우주선 조종하기, 대화하는 로봇 만들기 등 아이들이 흥미를 가지고 열성적으로 참여할 수 있는 콘텐츠를 통해 전반적인 프로그래밍 기법을 배우고 논리적 사고력과 창의력을 기릅니다.",
	    image: "",
	    youtube: "",
	    vimeo: "https://player.vimeo.com/video/65583694"
	  },
		chart: {
			data: {
		    labels: ["창의적 사고", "융합적 사고", "논리적 사고", "문제해결 능력", "개발 응용 능력"],
		    datasets: [
	        {
	          label: "교육효과",
						fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
	          data: [90, 80, 100, 95, 60]
	        }
		    ]
			},
			desc: [
				{
					title: "논리적 사고",
					content: "문제 해결을 위해 블록들을 조립하며 프로그래밍 하는 과정에서 논리적 사고 능력을 기를 수 있습니다."
				},
				{
					title: "문제해결 능력",
					content: "주어진 블록들과 프로그래밍 적 기능을 통해 스스로 문제를 해결하며 문제해결 능력을 기를 수 있습니다."
				},
				{
					title: "창의적 사고",
					content: "여러 블록들을 어떻게 조합할지 고민하고, 스스로 만들어보며 창의적 사고 능력을 기를 수 있습니다."
				},
			]
		}
	},
	web: {
		info: {
	    title: "Web",
	    subtitle: "Tech Pro",
	    desc: "웹은 컴퓨팅 분야에서 굉장히 중요한 위치에 있습니다. 특히 최근에는 웹이 모바일이나 데스크탑 에플리케이션 개발에서 사용되고 있기 때문에 가장 주목 받고 있는 분야이기도 합니다. 그런 웹의 최소 단위인 웹 페이지를 만드는 언어가 바로 HTML과 CSS입니다. HTML은 웹페이지의 구조를 만드는 언어이고, CSS는 HTML을 보기 좋게 디자인하는 역할을 하는 언어입니다. HTML이 웹페이지의 '뼈'라면 CSS는 '살'이라고 할 수 있습니다. 즉, HTML과 CSS를 배우면 자신이 표현하고 싶은 정보를 보기 좋게 웹 페이지 형태로 만들어 낼 수 있습니다.",
			target: "초등학교 4학년 이상 친구들",
	    needed: "노트북",
			term: "12주",
			time: "매주 90분"
	  },
	  eduinfo: {
	    desc: "생일 축하 카드 만들기, 로봇 조립하기 등 아이들이 흥미를 가지고 열성적으로 참여할 수 있는 콘텐츠를 통해 HTML과 CSS를 배워 스스로 멋진 웹 페이지를 만들 수 있습니다.",
	    image: "img/sample1.png",
	    youtube: "",
	    vimeo: ""
	  },
		chart: {
			data: {
		    labels: ["창의적 사고", "융합적 사고", "논리적 사고", "문제해결 능력", "개발 응용 능력"],
		    datasets: [
	        {
	          label: "교육효과",
						fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
	          data: [70, 100, 90, 75, 80]
	        }
		    ]
			},
			desc: [
				{
					title: "논리적 사고",
					content: "문제 해결을 위해 컴퓨터적 사고를 하는 과정에서 논리적 사고 능력을 기를 수 있습니다."
				},
				{
					title: "융합적 사고",
					content: "웹의 디자인적 요소를 HTMl, CSS 라는 서로 다른 언어를 통해 구조화 하며 융합적 사고를 기를 수 있습니다."
				},
				{
					title: "문제해결 능력",
					content: "주어진 웹 페이지를 직접 만들며 스스로 문제를 해결하는 능력을 기를 수 있습니다."
				},
			]
		}
	},
	python: {
		info: {
	    title: "파이썬",
	    subtitle: "Tech Pro",
	    desc: "파이썬은 아주 인기있는 프로그래밍 언어로, 파이썬을 이용하면 웹사이트, 게임, 과학용 소프트웨어, 그래픽 소프트웨어 등을 만들 수 있습니다. 그리고 같은 역할을 하는 다른 언어들에 비해 훨씬 쉽고 간결하여 처음 프로그래밍을 접하는 아이들이 배우기 좋은 언어이기도 합니다.",
			target: "초등학교 4학년 이상 친구들",
	    needed: "노트북",
			term: "12주",
			time: "매주 90분"
	  },
	  eduinfo: {
	    desc: "수수께끼 만들고 서로 풀어보기, 숫자 맞추기 게임 등 아이들이 흥미를 가지고 열성적으로 참여할 수 있는 콘텐츠를 통해 파이썬 언어를 배우고 프로그래밍 기법을 배워 웹, 게임을 비롯한 어떤한 프로그램도 만들 수 있는 기본 소양을 갖출 수 있습니다.",
	    image: "img/sample2.png",
	    youtube: "",
	    vimeo: ""
	  },
		chart: {
			data: {
		    labels: ["창의적 사고", "융합적 사고", "논리적 사고", "문제해결 능력", "개발 응용 능력"],
		    datasets: [
	        {
	          label: "교육효과",
						fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
	          data: [70, 80, 100, 95, 80]
	        }
		    ]
			},
			desc: [
				{
					title: "논리적 사고",
					content: "문제 해결을 위해 프로그래밍을 하며 컴퓨터적 사고를 하는 과정에서 논리적 사고 능력을 기를 수 있습니다."
				},
				{
					title: "문제해결 능력",
					content: "주어진 문제를 파이썬 언어로 프로그래밍을 하며 스스로 해결하는 과정에서 문제해결 능력을 기를 수 있습니다."
				},
				{
					title: "창의적 사고",
					content: "같은 문제를 다양한 방식으로 프로그래밍 해보며 창의력을 기를 수 있습니다."
				}
			]
		}
	},
	webdev: {
		info: {
	    title: "Web 개발",
	    subtitle: "Tech Master",
			desc: "웹은 컴퓨팅 분야에서 굉장히 중요한 위치에 있습니다. 특히 최근에는 웹이 모바일이나 데스크탑 에플리케이션 개발에서 사용되고 있기 때문에 가장 주목 받고 있는 분야이기도 합니다. 그런 웹의 최소 단위인 웹 페이지를 만드는 언어가 바로 HTML과 CSS입니다. HTML은 웹페이지의 구조를 만드는 언어이고, CSS는 HTML을 보기 좋게 디자인하는 역할을 하는 언어입니다. HTML이 웹페이지의 '뼈'라면 CSS는 '살'이라고 할 수 있습니다. 즉, HTML과 CSS를 배우면 자신이 표현하고 싶은 정보를 보기 좋게 웹 페이지 형태로 만들어 낼 수 있습니다.",
	    target: "중학교 1학년 이상 친구들",
	    needed: "노트북",
			term: "12주",
			time: "매주 180분"
	  },
	  eduinfo: {
	    desc: "HTML, CSS, Javascript, 이 세 가지의 웹을 다루는 언어를 배웁니다. 첫 수업부터 아이들이 만들고 싶은 웹 서비스를 직접 생각하게 하고, 기획부터 디자인, 개발까지 12주 동안 함께 완성해갑니다.",
	    image: "img/webdev.jpg",
			imageBorder: true,
	    youtube: "",
	    vimeo: ""
	  },
		chart: {
			data: {
		    labels: ["창의적 사고", "융합적 사고", "논리적 사고", "문제해결 능력", "개발 응용 능력"],
		    datasets: [
	        {
	          label: "교육효과",
						fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
	          data: [90, 90, 70, 85, 100]
	        }
		    ]
			},
			desc: [
				{
					title: "문제해결 능력",
					content: "현실 속 문제를 스스로 찾아 이를 웹 서비스를 통해 해결하는 과정에서 문제해결 능력을 기를 수 있습니다."
				},
				{
					title: "융합적 사고",
					content: "웹 서비스를 만드는 과정에서 구상, 기획, 디자인, 개발 과정을 거치며 융합적 사고 능력을 기를 수 있습니다."
				},
				{
					title: "창의적 사고",
					content: "문제를 해결하는 다양한 방법을 스스로 생각하며 창의력을 기를 수 있습니다."
				},
			]
		}
	},
	android: {
		info: {
	    title: "안드로이드 개발",
	    subtitle: "Tech Master",
	    desc: "안드로이드는 전 세계 시장의 60% 이상, 특히 우리나라에서는 80% 정도의 스마트폰 사용자들이 사용하는 운영체제 입니다. 이런 안드로이드 앱을 직접 기획하고 프로그래밍하여 논리적 사고력을 기르고 창의적 사고 방법을 배울 수 있습니다. 또한 수많은 사람들에게 서비스를 제공하는 과정을 통해 기업가 정신을 배우고 보람을 느낄 수 있습니다.",
			target: "중학교 1학년 이상 친구들",
	    needed: "노트북",
			term: "24주",
			time: "매주 180분"
	  },
	  eduinfo: {
	    desc: "가위바위보 게임, 할일 정리 앱 등 재미있고 유용한 컨텐츠 앱을 통해 아이들이 흥미를 가지고 참여할 수 있습니다. Java 언어를 배우며 프로그래밍의 기초적인 이론부터 응용까지 학습합니다. 또한 이를 통해 안드로이드 앱을 개발하고 전 세계에 서비스합니다.",
	    image: "img/android.jpg",
			imageBorder: true,
	    youtube: "",
	    vimeo: ""
	  },
		chart: {
			data: {
		    labels: ["창의적 사고", "융합적 사고", "논리적 사고", "문제해결 능력", "개발 응용 능력"],
		    datasets: [
	        {
	          label: "교육효과",
						fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
	          data: [90, 70, 90, 95, 100]
	        }
		    ]
			},
			desc: [
				{
					title: "창의적 사고",
					content: "여러 모듈들을 어떻게 조합할지 고민하고, 스스로 만들어보며 창의적 사고 능력을 기를 수 있습니다."
				},
				{
					title: "문제해결 능력",
					content: "주어진 모듈과 프로그래밍 적 기능을 통해 스스로 문제를 해결하며 문제해결 능력을 기를 수 있습니다."
				},
				{
					title: "논리적 사고",
					content: "문제 해결을 위해 컴퓨터적 사고를 하는 과정에서 논리적 사고 능력을 기를 수 있습니다."
				}
			]
		}
	},
	ap: {
		info: {
	    title: "Ap",
	    subtitle: "Ap",
	    desc: "",
			target: "중학교 1학년 이상 친구들",
	    needed: "노트북",
			term: "12주",
			time: "매주 180분"
	  },
	  eduinfo: {
	    desc: "",
	    image: "img/ap.jpg",
			imageBorder: true,
	    youtube: "",
	    vimeo: ""
	  },
		chart: {
			data: {
		    labels: ["창의적 사고", "융합적 사고", "논리적 사고", "문제해결 능력", "개발 응용 능력"],
		    datasets: [
	        {
	          label: "교육효과",
						fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
	          data: [60, 70, 100, 95, 80]
	        }
		    ]
			},
			desc: [
				{
					title: "창의적 사고",
					content: "여러 모듈들을 어떻게 조합할지 고민하고, 스스로 만들어보며 창의적 사고 능력을 기를 수 있습니다."
				},
				{
					title: "문제해결 능력",
					content: "주어진 모듈과 프로그래밍 적 기능을 통해 스스로 문제를 해결하며 문제해결 능력을 기를 수 있습니다."
				},
				{
					title: "논리적 사고",
					content: "문제 해결을 위해 컴퓨터적 사고를 하는 과정에서 논리적 사고 능력을 기를 수 있습니다."
				}
			]
		}
	}
};

export default class Poster extends React.Component {
	constructor(props) {
		super(props);
		console.log("asdf")
	}

	componentWillMount() {
		const lecture = this.props.params.lecture
		this.setViewForLecture(lecture)
	}

	componentWillReceiveProps(props) {
		const lecture = props.params.lecture
		this.setViewForLecture(lecture)
	}

	setViewForLecture(lecture) {
		this.setState({
			info: data[lecture].info,
			eduinfo: data[lecture].eduinfo,
			chart: data[lecture].chart
		});
	}

	render() {
		return (
      <div id="poster">
        <LectureInfo info={this.state.info} />
        <hr />
				<LectureChart chart={this.state.chart}/>
				<hr />
        <Eduinfo eduinfo={this.state.eduinfo}/>
      </div>
    );
  }
}
