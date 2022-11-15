import { lazy } from "react";

export const publicRoutes = [
  {
    path: "/",
    element: lazy(() => import("../pages/login/Login")),
  },
  {
    path: "/login",
    element: lazy(() => import("../pages/login/Login")),
  },
];

export const privateRoutes = [
  {
    path:"/home",
    element: lazy(()=> import("../pages/home/Home"))
  }
];