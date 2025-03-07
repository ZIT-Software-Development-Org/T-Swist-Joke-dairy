import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
// import NotFoundPage from "./pages/NotFoundPage";


export const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/signup" element={<SignupPage />} />                          
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* <Route path="*" element={<NotFound />} /> Handles unknown routes */}
        </Routes>
    );
};
