import { createBrowserRouter } from "react-router-dom";
import NavigatePage from "./middlewares/NavigatePage";
import ChekLang from "./lib/CheckLang";
import MainLayout from "./layouts/MainLayout";
import { PageNotFound } from "./components";
import { About, Contacts, Events, Home, News } from "./app";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <NavigatePage />,
  },
  {
    path: ":lang",
    element: <ChekLang />,
    children: [
      {
        path: "",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "events",
            element: <Events />,
          },
          {
            path: "news",
            element: <News />,
          },
          {
            path: "contacts",
            element: <Contacts />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
