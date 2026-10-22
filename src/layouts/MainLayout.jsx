import { Outlet } from "react-router";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
    return (
        <div className="relative min-h-screen bg-[#0b1226] text-white flex flex-col">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;

