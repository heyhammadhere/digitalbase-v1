import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import DashboardLayout from "./Layout/DashboardLayout";
import Youtube from "./Views/Dashboard/Youtube";
import Seo from "./Views/Dashboard/Seo";
import MusicEngine from "./Views/Dashboard/MusicEngine";
import Payments from "./Views/Dashboard/Payments";
import Settings from "./Views/Dashboard/Settings";
import Login from "./Views/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Youtube />} />
          <Route path="seo" element={<Seo />} />
          <Route path="music" element={<MusicEngine />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </RoutesWrapper>
    </BrowserRouter>
  );
};

export default Routes;
