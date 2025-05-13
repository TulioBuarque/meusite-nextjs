'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Bell, Settings, BarChart2, Newspaper } from 'lucide-react';
import Image from 'next/image';

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/alerts', label: 'Alerts', icon: Bell },
    { href: '/charts', label: 'Charts', icon: BarChart2 },
    { href: '/news', label: 'News', icon: Newspaper },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-blue-900 text-blue-100 flex flex-col h-screen p-4 border-r border-blue-800">
      <div className="flex items-center mb-10 px-2">
        <div className="mr-2">
          <div className="w-10 h-10 relative">
            <div className="absolute w-10 h-3 bg-blue-500 rounded bottom-0"></div>
            <div className="absolute w-10 h-3 bg-blue-500 rounded bottom-3 opacity-70"></div>
            <div className="absolute w-10 h-3 bg-blue-500 rounded bottom-6 opacity-40"></div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white">ForexBlocks</h1>
      </div>

      <nav className="flex-grow">
        <ul>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="mb-2">
                <Link
                  href={item.href}
                  className={`flex items-center px-3 py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-700 text-white'
                      : 'hover:bg-blue-800 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Trader Profile at Bottom */}
      <div className="flex items-center mt-auto pt-4 border-t border-blue-800">
        <Image
          src="https://via.placeholder.com/40"
          alt="Trader Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="ml-3">
          <div className="font-semibold text-white">Trader Name</div>
          <div className="text-sm text-blue-300">Profile</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
