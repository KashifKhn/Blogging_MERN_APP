import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {

  return (
    <>
      <Header />
      <main className="dark:bg-gray-900">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayouts;
