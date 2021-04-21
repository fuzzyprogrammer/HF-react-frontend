// import { authRoles } from "app/auth/authRoles";
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
    // auth: authRoles.sa
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

  // route for users
  {
    path: "/pages/jamath-user-list",
    component: React.lazy(()=> import("./jamathUsers/JamathUserList")),
  },
  {
    path: "/pages/jamath-user-form/:slug",
    component: React.lazy(()=> import("./jamathUsers/jamath-user-form/JamathForm")),
  },
  {
    path: "/pages/jamath-user-form/",
    component: React.lazy(()=> import("./jamathUsers/jamath-user-form/JamathForm")),
  },
  {
    path: "/pages/view-jamath-user",
    component: React.lazy(()=> import("./jamathUsers/jamathUser-viewer/JamathUserViewer")),
  },

  // routes for jamaths
  {
    path: "/pages/jamath-list",
    component: React.lazy(() => import("./jamath/JamathList")),
  },
  {
    path: "/pages/jamath-form/:slug",
    component: React.lazy(() => import("./jamath/jamath-form/JamathForm")),
  },
  {
    path: "/pages/jamath-form",
    component: React.lazy(() => import("./jamath/jamath-form/JamathForm")),
  },
  {
    path: "/pages/view-jamath",
    component: React.lazy(() => import("./jamath/jamath-viewer/JamathViewer")),
  },
  {
    path: "/pages/family-form/:id",
    component: React.lazy(() => import("./families/family-form/FamilyForm")),
  },
  {
    path: "/pages/family-form",
    component: React.lazy(() => import("./families/family-form/FamilyForm")),
  },
  {
    path: "/pages/family-list",
    component: React.lazy(() => import("./families/FamilyList")),
  },
  {
    path: "/pages/family-member-form/:slug",
    component: React.lazy(() => import("./families/members-form/MemberForm")),
  },
  // {
  //   path: "/pages/family-member-form",
  //   component: React.lazy(() => import("./families/members-form/MemberForm")),
  // },
  {
    path: "/pages/view-family/:familyId",
    component: React.lazy(() => import("./families/family-viewer/FamilyViewer")),
  },
  {
    path: "/pages/view-family-report/:familyId",
    component: React.lazy(() => import("./families/family-viewer/report/FamilyReport")),
  },
  {
    path: "/pages/shared",
    component: React.lazy(() => import("./families/family-viewer/report/FamilyReport")),
  },

  {
    path: "/pages/jamath-access",
    component: React.lazy(() => import("./settings/forms/JamathSettingForm")),
  },

  {
    path: "/pages/state",
    component: React.lazy(() => import("./settings/State/StateTable")),
  },
  {
    path: "/pages/district/:stateId",
    component: React.lazy(() => import("./settings/District/DistrictTable")),
  },
  {
    path: "/pages/taluk/:districtId",
    component: React.lazy(() => import("./settings/Taluk/TalukTable")),
  },
  {
    path: "/pages/jamath/:talukId",
    component: React.lazy(() => import("./settings/Jamath/JamathTable")),
  },
  {
    path: "/pages/forms/:jamathId",
    component: React.lazy(() => import("./settings/forms/JamathSettingForm")),
  },
  


];

export default pagesRoutes;
