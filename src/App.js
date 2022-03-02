import React, { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import User_Signup from "./pages/public/user_signup";
import User_login from "./pages/public/user_login";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/user-login" element={<User_Signup />}></Route>
        <Route path="/user-signup" element={<User_login />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
