import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header";

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <section className="outlet">
        <main className="outlet-container">
          <Header user={"heyhammadhere"} />
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default DashboardLayout;
