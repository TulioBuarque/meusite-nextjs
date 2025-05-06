"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Bell, Settings, BarChart2, Newspaper } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/alerts', label: 'Alerts', icon: Bell },
    { href: '/charts', label: 'Charts', icon: BarChart2 }, // Added Charts based on mockup
    { href: '/news', label: 'News', icon: Newspaper }, // Added News based on mockup
    { href: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-gray-300 flex flex-col h-screen p-4 border-r border-gray-700">
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
                  className={`flex items-center px-3 py-3 rounded-lg transition-colors duration-200 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-700 hover:text-white'}`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* User profile section can be added here later */}
    </aside>
  );
};

export default Sidebar;

