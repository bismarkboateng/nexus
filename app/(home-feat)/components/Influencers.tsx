import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { influencers } from "../data";

const Influencers = () => {
  return (
    <div className="bg-white col-span-3 sm:col-span-1 rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Name</TableHead>
            <TableHead>Follower</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {influencers.map((invoice) => (
            <TableRow key={invoice.name}>
              <TableCell className="font-medium">
                <div className="flex gap-2">
                  <Image src={invoice.avatar} alt="" width={40} height={40}  className="rounded-full"/>
                  <p>{invoice.name}</p>
                </div>
              </TableCell>
              <TableCell>{invoice.followers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Influencers;
