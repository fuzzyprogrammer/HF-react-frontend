import React from 'react';

const stateRoute = [
  {
    path: "/state-table",
    exact: true,
    component: React.lazy(() => import("./StateTable"))
  }
];

export default stateRoute;
