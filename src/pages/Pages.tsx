import React from "react";
import { Routes, Route } from "react-router-dom";
import BackOffice from "./BackOffice/BackOffice";
import Blog from "./Blog/Blog";

const PAGES = [
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/backOffice",
    element: <BackOffice />,
  },
];

function Pages() {
  return (
    <Routes>
      {PAGES.map((page) => (
        <Route key={page.path} path={page.path} element={page.element} />
      ))}
    </Routes>
  );
}

export default Pages;
