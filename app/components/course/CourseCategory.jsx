import React from 'react';

import Jumbotron from '../Jumbotron.jsx';
import Subnav from '../Subnav.jsx';
import Poster from './Poster.jsx';

const menus = {
  starter: {
    title: "Tech Starter",
    img: "/img/tech_starter.png",
    content: "아이들의 생각을 실현하는 놀이터, 테크브릿지",
    children: [
      {
        name: "SAM Labs",
        path: "/course/starter/sam"
      },
      {
        name: "Scratch",
        path: "/course/starter/scratch"
      }
    ]
  },
  pro: {
    title: "Tech Pro",
    img: "/img/tech_pro.png",
    content: "아이들의 생각을 실현하는 놀이터, 테크브릿지",
    children: [
      {
        name: "Web",
        path: "/course/pro/web"
      },
      {
        name: "파이썬",
        path: "/course/pro/python"
      }
    ]
  },
  master: {
    title: "Tech Master",
    img: "/img/tech_master.png",
    content: "아이들의 생각을 실현하는 놀이터, 테크브릿지",
    children: [
      {
        name: "Web 개발",
        path: "/course/master/webdev"
      },
      {
        name: "Android 개발",
        path: "/course/master/android"
      }
    ]
  },
  ap: {
    title: "Ap",
    img: "/img/ap.png",
    content: "아이들의 생각을 실현하는 놀이터, 테크브릿지",
    children: [
      {
        name: "Ap",
        path: "/course/ap/ap"
      }
    ]
  }
}

export default class CourseCategory extends React.Component {
	constructor(props) {
		super(props);
	}

  componentWillMount() {
    this.setState({
      menus: menus[this.props.params.category]
    });
  }

	render() {
		return (
      <div>
        <Jumbotron img={this.state.menus.img} content={this.state.menus.content} />
				<Subnav menus={this.state.menus.children}/>
        {this.props.children}
      </div>
    );
  }
}
