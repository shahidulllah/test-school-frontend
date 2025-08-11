import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import OtpVerifyPage from "./pages/OtpVerifyPage";
import DashboardPage from "./pages/DashboardPage";
import TestStepPage from "./pages/TestStepPage";
import ProfilePage from "./pages/ProfilePage";
import CertificatePage from "./pages/CertificatePage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Registerpage from "./pages/Registerpage";
import type { JSX } from "react";

// Placeholder for auth check, replace with real auth state later
const isAuthenticated = false;

// Protected route wrapper
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/otp-verify" element={<OtpVerifyPage />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/test/:step"
          element={
            <PrivateRoute>
              <TestStepPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/certificate"
          element={
            <PrivateRoute>
              <CertificatePage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
