"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/app/(lead-feat)/data";
import Text from "../ui/Text";



const Sidebar = () => {
  const pathname = usePathname();

  const isPathActive = (path: string) => pathname === path

  return (
    <div className="w-64 bg-dark-bg min-h-screen">
      {sidebarLinks.map((link, index) => {
        const isActive = link.path && isPathActive(link.path);

        return (
          <div key={index}>
            {link.path && (
              <Link href={link.path}>
                <div
                  className={`${
                    isActive
                      ? " bg-blue-700 text-white border-r-4 border-blue-700"
                      : "text-white"
                  } flex items-center p-2 cursor-pointer text-sm`}
                >
                  {link.icon}
                  <Text variant="span" className="ml-4">
                    {link.name}
                  </Text>
                </div>
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
