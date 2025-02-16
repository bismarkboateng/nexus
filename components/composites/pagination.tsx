"use client";

import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { Dispatch, SetStateAction } from "react";

export default function PaginationComponent({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <section className="mb-2">
      <Pagination>
        <PaginationContent>
          {pages.map((page, index) => (
            <PaginationItem
              key={`${page}-${index}`}
              onClick={() => setCurrentPage(page)}
              className={`pt-1 px-3 rounded-md cursor-pointer ${
                page == currentPage ? "bg-blue-500 text-white" : "bg-gray-500"
              }`}
            >
              {page}
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </section>
  );
}
