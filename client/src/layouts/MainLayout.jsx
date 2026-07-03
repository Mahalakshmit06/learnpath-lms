import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AppRoutes from "../routes/AppRoutes";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;