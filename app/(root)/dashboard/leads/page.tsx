import React from "react";
import { DataTable } from "@/components/composite/DataTable";
import {  columns } from "@/components/composite/Culom";
import { leadslist } from "@/data";
import { Lead } from "../types";

async function getData(): Promise<Lead[]> {
  return leadslist;
}

const page = async () => {
  const data = await getData();

  return (
    <main >
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
};

export default page;
