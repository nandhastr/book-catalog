import Navbar from "../Navbar";
import Footer from "../Footer";

const MainLayout = ({children}) => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />

                <main>{children}</main>

                <Footer />
            </div>
        </>
    );
}

export default MainLayout;