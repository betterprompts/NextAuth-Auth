import { AuthNavbar } from "@/components/authnavbar"
import { Link } from "@nextui-org/link"

export default function AuthLayout({ children }) {
  return (
    <>
        <AuthNavbar />
        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
            {children}
        </main>
    </>
  )
}
