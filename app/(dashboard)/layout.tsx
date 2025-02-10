import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

const DashboardLayout = ({
    children
}: {
    children:React.ReactNode;
}) => {
    return (
        <div className="h-full relative">
            <div className="hidden lg:flex w-full fixed top-0 z-[90]">
                <Topbar />
            </div>

            <main className="md:pl-72 lg:pl-0">
                {/* Navbar for medium screens only */}
                <div className="md:flex lg:hidden w-full fixed top-0 z-[90]">
                    <Navbar />
                </div>

                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;