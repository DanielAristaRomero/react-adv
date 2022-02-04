import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import("../01-lazyload/layout/LazyLayout"));
const Lazy3 = lazy(() => import("../01-lazyload/pages/LazyPage3"));

export const routes: Route[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    component: LazyLayout,
    name: "LazyLayout",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    component: NoLazy,
    name: "No Lazy",
  },
];
