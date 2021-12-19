import { Route, Redirect } from 'react-router-dom';
import React, { Suspense, lazy, Fragment } from 'react';
import Loader from 'react-js-loader'

const Main = lazy(() => import('../src/Layout/Base'));

function App() {
  return (
    <Fragment>
      <div className="App">
        <Suspense fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="semi-circle-spin" />
              </div>
            </div>
          </div>
        }>
            <Route path="/main" component={Main} />
        </Suspense>
            {/* path="/" itu sebenernya direct kemana? kalau pake yg v6 
            ada warning gini,
            Matched leaf route at location "/" does not have an element. 
             */}
            <Route exact path="/" render={() => (
              <Redirect to="/main/home" />
            )} />
      </div>
    </Fragment>
  );
}

export default App;
