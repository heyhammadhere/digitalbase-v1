import Dashboard from "./Views/Dashboard";
import { Auth, AuthScreen } from "./Views/Auth";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthScreen />} />
      <Route element={<Auth />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
