import React from 'react'
import '../../../global.css'
import NavBar from './_components/NavBar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-background text-on-surface w-screen min-h-screen">
      <div className="p-2">{children}</div>
      <NavBar />
    </div>
  )
}
