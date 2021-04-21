import React from 'react';

const districtRoute = [
  {
    path: "/district-table",
    exact: true,
    component: React.lazy(() => import("./DistrictTable"))
  }
];

export default districtRoute;
