import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Reader from './Reader/Reader';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/reader" exact component={Reader} />
      </Switch>
    </>
  );
};

export default App;
