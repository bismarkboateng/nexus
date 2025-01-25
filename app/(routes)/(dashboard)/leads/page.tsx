import React from "react";
import { DataTable } from "@/components/composites/data-table";
import {  columns } from "@/components/composites/Column";
import { leadslist } from "@/app/(lead-feat)/data";
import { Lead } from "@/app/(lead-feat)/types";

async function getData(): Promise<Lead[]> {
  return leadslist;
}

const Leads = async () =>  {
  const data = await getData();

  return (
      <main className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </main>
  );
};

export default Leads;