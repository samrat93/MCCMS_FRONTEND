import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User_login from "./pages/public/accounts/user_login";
import Layout from "./components/layout/Layout";
import SignupForm from "./pages/public/accounts/SignupForm";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/userlogin" element={<User_login />}></Route>
          <Route path="/usersignup" element={<SignupForm />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
