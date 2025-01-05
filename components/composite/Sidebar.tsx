"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/data";
import Text from "../ui/Text";

const Sidebar = () => {
  const pathname = usePathname();

  const isPathActive = (path: string) => pathname === path;

  return (
    <div className="w-64 bg-black/5 min-h-screen text-black">
      {sidebarLinks.map((link, index) => {
        const isActive = link.path && isPathActive(link.path);

        return (
          <div key={index}>
            {link.path && (
              <Link href={link.path}>
                <div
                  className={`${
                    isActive
                      ? "bg-blue-400/20 text-blue-700 border-r-4 font-semibold border-blue-700"
                      : "text-black/80"
                  } flex items-center p-2 cursor-pointer`}
                >
                  <Text variant="span" className="ml-4">{link.name}</Text>
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
