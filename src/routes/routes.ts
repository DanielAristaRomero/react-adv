import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";

interface Route {
  to: string;
  path: string;
  component: () => JSX.Element;
  name: string;
}

export const routes: Route[] = [
  {
    to: "/shopping",
    path: "shopping",
    component: ShoppingPage,
    name: "Shopping",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    component: LazyPage2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    component: LazyPage3,
    name: "Lazy-3",
  },
];
