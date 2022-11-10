import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Dashboard from "./Views/Dashboard";
import Login from "./Views/Auth/LoginButton";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
    isProtected: true,
  },
  {
    path: "/login",
    element: <Login />,
    isProtected: false,
  },
];

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        {routes.map(({ path, element, isProtected }) =>
          isProtected ? (
            <Route
              path={path}
              element={<ProtectedRoute>{element}</ProtectedRoute>}
            />
          ) : (
            <Route path={path} element={element} />
          )
        )}
      </RoutesWrapper>
    </BrowserRouter>
  );
};

export default Routes;
