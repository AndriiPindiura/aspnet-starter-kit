import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Main from './containers/Main';

export default (store) => {
  console.log(store);
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      {/*
      <Route path="zfland" component={ZFLanding}>
        <Route path="inzfland" component={ZFLanding} />
      </Route>
      <Route path="hw2" component={ZFLanding} />
      <Route path="hw3" component={ZFLanding} />
      */}
    </Route>
    );
};
