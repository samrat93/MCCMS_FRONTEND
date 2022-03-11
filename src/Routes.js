import { useRoutes } from "react-router-dom";
import User_login from "./pages/public/accounts/user_login";
import User_Signup from "./pages/public/accounts/user_signup";
import AdminDashboard from "./pages/admin_dashboard";
import HomePage from "./pages/homepage";
import Layout from "./components/layout/Layout";

const Routes = () => {
  const element = useRoutes([{ path: "/", element: <Layout></Layout> }]);
};
export default Routes;
