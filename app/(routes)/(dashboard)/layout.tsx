import React from "react";
import Sidebar from "@/components/composites/Sidebar";
import Header from "@/components/composites/header-actions";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full md:w-full md:flex">
      <section className="hidden md:flex md:w-[200px] fixed h-screen border-r border-gray-200 shadow-md">
        <Sidebar />
      </section>

      <section className="md:ml-[200px] md:w-[calc(100%-200px)] w-full bg-white">
        <section className="w-full md:flex flex-row items-center justify-between text-white">
          <Header />
        </section>

        <div className="px-4">{children}</div>
      </section>
    </section>
  );
};

export default Layout;
