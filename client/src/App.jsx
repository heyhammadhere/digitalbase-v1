import { Toast } from "./Components/Toast";
import { AuthProvider } from "./Context/AuthProvider";
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
