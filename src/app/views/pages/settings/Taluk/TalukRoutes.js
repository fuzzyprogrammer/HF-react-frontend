import React from 'react';

const talukRoute = [
  {
    path: "/taluk-table",
    exact: true,
    component: React.lazy(() => import("./TalukTable"))
  }
];

export default talukRoute;
