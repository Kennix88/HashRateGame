import '../../../global.css'
import NavBar from './_components/NavBar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-[#17212b] text-white w-screen min-h-screen">
      <div className="p-4">{children}</div>
      <NavBar />
    </div>
  )
}
