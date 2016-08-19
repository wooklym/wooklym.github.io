import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory, hashHistory} from 'react-router';

import Nomatch from './components/Nomatch.jsx';
import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Course from './components/course/Course.jsx';
import CourseCategory from './components/course/CourseCategory.jsx';
import Total from './components/course/Total.jsx';
import Poster from './components/course/Poster.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="course" component={Course}>
        <IndexRoute component={Total} />
        <Route path=":category" component={CourseCategory}>
          <Route path=":lecture" component={Poster} />
        </Route>
      </Route>
      <Route path="*" component={Nomatch} />
    </Route>
  </Router>,
  document.body.appendChild(document.createElement('div'))
);
