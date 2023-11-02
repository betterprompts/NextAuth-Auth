import { DashboardNavbar } from "@/components/dashboardnavbar"
import { Link } from "@nextui-org/link"
import Sidebar from "@/components/sidebar"

export default function DashboardLayout({ children }) {
  return (
    <>
        <DashboardNavbar />
        <Sidebar />
        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
            {children}
        </main>
    </>
  )
}
