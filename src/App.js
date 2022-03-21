import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import User_login from "./pages/public/accounts/user_login";
import Layout from "./components/layout/Layout";
import SignupForm from "./pages/public/accounts/SignupForm";
import HomePage from "./pages/homepage";
import AdminDashboard from "./pages/admin_dashboard";
import UserList from "./pages/admin_dashboard/UserList";
import MunicipalityList from "./pages/admin_dashboard/MunicipalityList";
import AddCountry from "./pages/admin_dashboard/AddCountry";
import AddState from "./pages/admin_dashboard/AddState";
import ChangePassword from "./pages/admin_dashboard/ChangePassword";
import ComplaintList from "./pages/admin_dashboard/ViewComplaints";
import AddComplaintCategory from "./pages/admin_dashboard/AddComplainCategory";
import AddComplaintSubCategory from "./pages/admin_dashboard/AddComplaintSubCategory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="/admin" element={<Navigate replace to="userlist" />} />
          <Route path="userlist" element={<UserList />} />
          <Route path="municipalityList" element={<MunicipalityList />} />
          <Route path="add-country" element={<AddCountry />} />
          <Route path="add-state" element={<AddState />} />
          <Route path="complaint-list" element={<ComplaintList />} />
          <Route
            path="addComplaintCategory"
            element={<AddComplaintCategory />}
          />
          <Route
            path="addComplaintSubCategory"
            element={<AddComplaintSubCategory />}
          />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>
      </Routes>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/homepage" />} exact />
          <Route path="/homepage" element={<HomePage />}></Route>
          <Route path="/userlogin" element={<User_login />}></Route>
          <Route path="/usersignup" element={<SignupForm />}></Route>
          {/* <Route path="/adminDashboard" element={<AdminDashboard />}></Route> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
