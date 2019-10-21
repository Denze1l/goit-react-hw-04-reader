import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Reader from './Reader/Reader';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/reader" exact component={Reader} />
        <Redirect
          to={{
            pathname: '/reader',
            search: '?item=1',
          }}
        />
      </Switch>
    </>
  );
};

export default App;
