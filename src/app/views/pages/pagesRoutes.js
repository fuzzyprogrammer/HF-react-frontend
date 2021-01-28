import React from "react";

const pagesRoutes = [
  {
    path: "/pages/user-list-1",
    component: React.lazy(() => import("./user-list/UserList1")),
  },
  {
    path: "/pages/user-list-2",
    component: React.lazy(() => import("./user-list/UserList2")),
  },
  {
    path: "/pages/user-list-3",
    component: React.lazy(() => import("./user-list/UserList3")),
  },
  {
    path: "/pages/user-list-4",
    component: React.lazy(() => import("./user-list/UserList4")),
  },
  {
    path: "/pages/faq-1",
    component: React.lazy(() => import("./faq/Faq1")),
  },
  {
    path: "/pages/faq-2",
    component: React.lazy(() => import("./faq/Faq2")),
  },
  {
    path: "/pages/customer-list",
    component: React.lazy(() => import("./customers/CustomerList")),
  },
  {
    path: "/pages/new-customer",
    component: React.lazy(() =>
      import("./customers/customer-form/CustomerForm")
    ),
  },
  {
    path: "/pages/view-customer",
    component: React.lazy(() =>
      import("./customers/customer-viewer/CustomerViewer")
    ),
  },
  {
    path: "/pages/product-list",
    component: React.lazy(() => import("./products/ProductList")),
  },
  {
    path: "/pages/new-product",
    component: React.lazy(() => import("./products/ProductForm")),
  },
  {
    path: "/pages/view-product",
    component: React.lazy(() => import("./products/ProductViewer")),
  },
  {
    path: "/pages/order-list",
    component: React.lazy(() => import("./orders/OrderList")),
  },
  {
    path: "/pages/family-list",
    component: React.lazy(() => import("./families/FamilyList")),
  },
  {
    path: "/pages/new-family",
    component: React.lazy(() => import("./families/family-form/FamilyForm")),
  },
  {
    path: "/pages/jamath-list",
    component: React.lazy(() => import("./jamaths/JamathList")),
  },
  {
    path: "/pages/new-jamath",
    component: React.lazy(() => import("./jamaths/jamath-form/JamathForm")),
  },
  {
    path: "/pages/human-resource-list",
    component: React.lazy(() => import("./human-resources/HumanResourceList")),
  },
  {
    path: "/pages/new-human-resource",
    component: React.lazy(() => import("./human-resources/human-resource-form/HumanResourceForm")),
  },
  {
    path: "/pages/project-list",
    component: React.lazy(() => import("./projects/ProjectList")),
  },
  {
    path: "/pages/new-project",
    component: React.lazy(() => import("./projects/project-form/ProjectForm")),
  },
  {
    path: "/pages/user-list",
    component: React.lazy(() => import("./users/UserList")),
  },
  {
    path: "/pages/new-user",
    component: React.lazy(() => import("./users/user-form/UserForm")),
  },
  {
    path: "/pages/education-list",
    component: React.lazy(() => import("./education/EducationList")),
  },
  {
    path: "/pages/new-education",
    component: React.lazy(() => import("./education/education-form/EducationForm")),
  },
  {
    path: "/pages/headquarter-unit-list",
    component: React.lazy(() => import("./headquarter-units/HeadquarterUnitList")),
  },
  {
    path: "/pages/new-headquarter-unit",
    component: React.lazy(() => import("./headquarter-units/headquarter-unit-form/HeadquarterUnitForm")),
  },
  {
    path: "/pages/health-list",
    component: React.lazy(() => import("./health/HealthList")),
  },
  {
    path: "/pages/new-health",
    component: React.lazy(() => import("./health/health-form/HealthForm")),
  },
  {
    path: "/pages/infrastructure-list",
    component: React.lazy(() => import("./infrastructures/InfrastructureList")),
  },
  {
    path: "/pages/new-infrastructure",
    component: React.lazy(() => import("./infrastructures/infrastructure-form/InfrastructureForm")),
  },
  {
    path: "/pages/organisation-staff-list",
    component: React.lazy(() => import("./organisation-staff/OrganisationStaffLlist")),
  },
  {
    path: "/pages/new-organisation-staff",
    component: React.lazy(() => import("./organisation-staff/organisation-staff-form/OrganisationStaffForm")),
  },
  {
    path: "/pages/overseas-unit-list",
    component: React.lazy(() => import("./overseas-unit/OverseasUnitList")),
  },
  {
    path: "/pages/new-overseas-unit",
    component: React.lazy(() => import("./overseas-unit/overseas-unit-form/OverseasUnitForm")),
  },
  {
    path: "/pages/self-reliance-list",
    component: React.lazy(() => import("./self-reliance/SelfRelianceList")),
  },
  {
    path: "/pages/new-self-reliance",
    component: React.lazy(() => import("./self-reliance/self-reliance-form/SelfRelianceForm")),
  },
  {
    path: "/pages/food-list",
    component: React.lazy(() => import("./food/FoodList")),
  },
  {
    path: "/pages/new-food",
    component: React.lazy(() => import("./food/food-form/FoodForm")),
  },
];

export default pagesRoutes;
