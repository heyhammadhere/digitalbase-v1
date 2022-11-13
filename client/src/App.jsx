import { Toast } from "./Components/Toast";
import "react-toastify/dist/ReactToastify.css";
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
