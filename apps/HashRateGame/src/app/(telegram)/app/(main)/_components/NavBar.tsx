'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaTasks } from 'react-icons/fa'
import { GiMining } from 'react-icons/gi'
import { IoLogoGameControllerA } from 'react-icons/io'
import { IoStatsChart } from 'react-icons/io5'
import { MdMenu } from 'react-icons/md'

export default function NavBar() {
  const location = usePathname()
  const navItems = [
    {
      name: 'Games',
      href: '/games',
      icon: <IoLogoGameControllerA className="text-2xl" />,
    },
    { name: 'Tasks', href: '/tasks', icon: <FaTasks className="text-2xl" /> },
    {
      name: 'Mining',
      href: '/mining',
      icon: <GiMining className="text-2xl" />,
    },
    {
      name: 'Statystics',
      href: '/statistics',
      icon: <IoStatsChart className="text-2xl" />,
    },
    // {
    //   name: 'Friends',
    //   href: '/friends',
    //   icon: <FaUserFriends className="text-2xl" />,
    // },
    { name: 'Menu', href: '/menu', icon: <MdMenu className="text-2xl" /> },
  ]

  return (
    <div
      className={`bottom-0 left-0 right-0 fixed grid grid-cols-5 grid-rows-1 gap-2 p-2 border-t border-outline`}>
      {navItems.map((item) => (
        <div
          key={item.name}
          className={`flex flex-col items-center justify-center font-[600] text-[12px] gap-1 ${
            location !== `/app${item.href}`
              ? 'text-on-surface-variant'
              : 'text-on-surface'
          }`}>
          <Link
            className={`px-3 py-1 rounded-lg ${
              location !== `/app${item.href}`
                ? 'text-on-surface-variant'
                : 'text-on-surface bg-secondary-container'
            }`}
            href={`/app${item.href}`}>
            {item.icon}
          </Link>
          <span
            className={` ${
              location !== `/app${item.href}`
                ? 'text-on-surface-variant'
                : 'text-on-surface'
            }`}>
            {item.name}
          </span>
        </div>
      ))}
    </div>
  )
}
