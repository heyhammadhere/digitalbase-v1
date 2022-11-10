import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./Views/Dashboard";
import Login from "./Views/Login";

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
        {routes.map(({ path, element, isProtected }, index) =>
          isProtected ? (
            <Route
              key={index}
              path={path}
              element={<ProtectedRoute>{element}</ProtectedRoute>}
            />
          ) : (
            <Route key={index} path={path} element={element} />
          )
        )}
      </RoutesWrapper>
    </BrowserRouter>
  );
};

export default Routes;
