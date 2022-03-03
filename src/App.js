import React, { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import User_login from "./pages/public/user_login";
import Layout from "./components/layout/Layout";
import SignupForm from "./pages/public/SignupForm";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/userlogin" element={<User_login />}></Route>
        <Route path="/usersignup" element={<SignupForm />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
