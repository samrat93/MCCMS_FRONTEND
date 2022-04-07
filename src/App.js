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
import ManageUserComplaint from "./pages/admin_dashboard/ManageUserComplaints";
import AddCountry from "./pages/admin_dashboard/AddCountry";
import AddState from "./pages/admin_dashboard/AddState";
import ChangePassword from "./pages/admin_dashboard/ChangePassword";
import ComplaintList from "./pages/admin_dashboard/ViewComplaints";
import AddComplaintCategory from "./pages/admin_dashboard/AddComplainCategory";
import AddComplaintSubCategory from "./pages/admin_dashboard/AddComplaintSubCategory";
import AdminDashboardPage from "./pages/admin_dashboard/dashboard";
import PublicDashboard from "./pages/public/public_dashboard";
import LodgeComplaint from "./pages/public/public_dashboard/LodgeComplaint";
import ComplaintHistory from "./pages/public/public_dashboard/ComplaintHistory";
import PublicProfile from "./pages/public/public_dashboard/PublicProfile";
import ChangePasswordPublic from "./pages/public/public_dashboard/ChangePassword";
import PendingComplaints from "./pages/admin_dashboard/PendingComplaint";
import ProcessingComplaints from "./pages/admin_dashboard/ProcessingComplaint";
import ClosedComplaints from "./pages/admin_dashboard/ClosedComplaint";
import PublicFeedback from "./pages/public/public_dashboard/PublicFeedBack";
import UserFeedBackView from "./pages/admin_dashboard/FeedbackView";
import Header from "./components/layout/Header";
import Contact from "./pages/Contact";
import LoginForm from "./pages/Auth/SignIn";
import UserRegistration from "./pages/Auth/UserRegistration";
import PublicDashboardPage from "./pages/public/public_dashboard/Dashboard";
import { useSelector } from "react-redux";

// import NavigationMenu from "./components/layout/NavMenu";
function App() {
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;

  // console.log("in-appjs", userInfo);
  // const users = userInfo;

  // function UserAuth({ path, children }) {
  //   return users.user_info.is_superuser === false ? (
  //     <Navigate to="/userlogin" />
  //   ) : (
  //     children
  //   );
  // }
  // function CheckAuth({ children }) {
  //   return users === null ? children : <Navigate to="/chat" replace />;
  //   }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Navigate replace to="Home" />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/userlogin" element={<LoginForm />} />
          <Route path="/usersignup" element={<UserRegistration />} />
        </Route>
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="/admin" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="userlist" element={<UserList />} />
          <Route path="manageUserComplaint" element={<ManageUserComplaint />}>
            <Route
              path="manageUserComplaint/pendingComplaints"
              element={<Navigate replace to="pendingComplaints" />}
            />
            <Route path="pendingComplaints" element={<PendingComplaints />} />
            <Route
              path="processingComplaints"
              element={<ProcessingComplaints />}
            />
            <Route path="closedComplaints" element={<ClosedComplaints />} />
          </Route>
          <Route path="add-country" element={<AddCountry />} />
          {/* <Route path="editCountry" element={<EditCountry />} /> */}
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
          <Route path="userFeedbackView" element={<UserFeedBackView />} />
        </Route>

        <Route path="/public" element={<PublicDashboard />}>
          <Route path="/public" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" exact element={<PublicDashboardPage />} />
          <Route path="LodgeComplaint" exact element={<LodgeComplaint />} />
          <Route path="ComplaintHistory" exact element={<ComplaintHistory />} />
          <Route path="PublicProfile" exact element={<PublicProfile />} />
          <Route path="publicFeedback" exact element={<PublicFeedback />} />
          <Route
            path="ChangePasswordPublic"
            exact
            element={<ChangePasswordPublic />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
