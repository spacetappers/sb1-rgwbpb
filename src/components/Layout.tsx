import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavigationItem {
  name: string;
  icon: LucideIcon;
  href: string;
}

interface LayoutProps {
  children: React.ReactNode;
  navigationItems: NavigationItem[];
}

export function Layout({ children, navigationItems }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                CricketPro
              </span>
            </div>
            <div className="flex items-center">
              <button className="flex ml-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="user photo"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <item.icon className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-3">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 pt-20">
        <div className="p-4 border-2 border-gray-200 rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
}