"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import routePages from "./routes";
import React, { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ children, className }) => {
  return <nav className={className}>{children}</nav>;
};

const Topbar = () => {
  const pathname = usePathname();
  
  return (
    <Navbar className="fixed top-0 left-0 right-0 flex justify-between items-center px-10 py-4 bg-transparent backdrop-blur-md shadow-md z-50">
      <Link href={"/"}><h1 className="text-purple-600 text-2xl font-extrabold">ILOVATION</h1></Link>
      <div className="flex gap-6">
        {routePages.map((route) => (
          <Link key={route.href} href={route.href}>
            <Button variant={pathname === route.href ? "outline" : "outline"} className={`${route.color} ${route.background_color} font-medium`}>
              {route.label}
            </Button>
          </Link>
        ))}
      </div>
    </Navbar>
  );
};

export default Topbar;