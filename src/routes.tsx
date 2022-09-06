import Home, { homeResource } from "./home";
import Dogs, { dogsResource } from "./dogs";
import ErrorPage from "./error";

export const homeRoute = {
  name: "home",
  path: "/",
  exact: true,
  component: Home,
  resources: [homeResource]
};

export const dogsRoute = {
  name: "dogs",
  path: "/dogs",
  exact: true,
  component: Dogs,
  resources: [dogsResource]
};

export const errorRoute = {
  name: "error",
  path: "/error",
  exact: true,
  component: ErrorPage,
  resources: []
};
