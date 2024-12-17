import React from 'react'
import '../../../global.css'
import NavBar from './_components/NavBar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-background text-on-surface w-screen min-h-screen tracking-wider">
      <div className="p-4">{children}</div>
      <NavBar />
    </div>
  )
}
