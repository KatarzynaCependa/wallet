import React from "react";
import { Route, Routes } from "react-router-dom";
// import { SharedLayout } from "./components";
// import { PrivateRoute } from "../PrivateRoute";
// import { RestrictedRoute } from "../RestrictedRoute";

// const Home = lazy(() => import("../../pages/Home"));
// const Register = lazy(() => import("../../pages/Register"));
// const Login = lazy(() => import("../../pages/Login"));
// const Contacts = lazy(() => import("../../pages/Contacts"));

import { DiagramTab } from "./DiagramTab";
import { Header } from "./Header";
import { Navigation } from "./Navigation";

export const App = () => {
  return (
    <>
      <p>This is the App.jsx. Below is an example of an imported component.</p>
      <Header />
      <Navigation />
      <DiagramTab />
    </>
  );
};
