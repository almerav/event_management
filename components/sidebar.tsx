"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import routePages from "./routes";

const routes = routePages

const Sidebar = () => {
  const pathname = usePathname();
  
  return (
    <div
      className="space-y-4 py-4 flex flex-col h-full 
    bg-white text-black"
    >
      <div className="px-3 py-2 flex-1">
        <Link
          href="/"
          className="flex 
        items-center pl-3 mb-14"
        >
          <h1 className={cn("text-purple-600 text-3xl font-extrabold mt-2")}>
            ILOVATION
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn("text-sm group flex p-3 w-full",
                "justify-start font-medium cursor-pointer",
                "hover:text-purple-600 hover:bg-gray-200 rounded-lg",
                "transition",
                pathname === route.href ? "text-purple-600 bg-gray-200" :
                "text-black"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.icon_color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
