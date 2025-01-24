"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Text from "../ui/text";

function Header() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center py-2 px-4 justify-between w-full border-b border-gray-400">
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => {
            const fullPath = `/${paths.slice(0, index + 1).join("/")}`;
            const isLast = index === paths.length - 1;

            return (
              <React.Fragment key={index}>
                {index > 0 && <BreadcrumbSeparator />}

                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="capitalize font-semibold text-gray-800">
                      {path}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink>
                      <Link
                        href={fullPath}
                        className="capitalize text-gray-600 hover:text-blue-600"
                      >
                        {path}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>

      <section className="flex items-center gap-4">
        <div className="text-gray-500">
          <Bell size={20} />
        </div>

        <div className="w-px h-6 bg-gray-400"></div>

        <div className="flex items-center gap-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/images/avatar.jpeg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <Text variant="h3" className="font-semibold text-gray-600 text-md">
              Esther Lardze
            </Text>
            <Text className="text-xs text-gray-500">Frontend Developer</Text>
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Header;
