import { AuthProvider } from "./Context/AuthProvider";
import { Toast } from "./Components/Toast";
import Routes from "./Routes";

const App = () => {
  return (
    <AuthProvider>
      <Toast />
      <Routes />
    </AuthProvider>
  );
};

export default App;
