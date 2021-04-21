import React from 'react';

const jamathRoute = [
  {
    path: "/jamath-table",
    exact: true,
    component: React.lazy(() => import("./JamathTable"))
  }
];

export default jamathRoute;
