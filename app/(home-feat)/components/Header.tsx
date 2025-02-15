import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features } from "../data";


const Header = () => {
  return (
    <section className="flex items-center justify-between gap-2 py-4 overflow-x-scroll custom-scrollbar">
        {features.map((feature) => (
            <Card className="min-w-[250px] col-span-1 flex items-center cursor-pointer justify-between">
            <section>
              <CardHeader>
                <h1 className="text-gray-500 font-semibold">{feature.title}</h1>
                <p className="text-xl font-semibold"> 
                  {feature.value}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <small className="text-green-400">{feature.rate}</small>
                  <small className="text-gray-500">{feature.period}</small>
                </div>
              </CardContent>
            </section>
      
           <Image src={feature.icon} alt="" width={30} height={30} className="object-contain pr-2"/>
          </Card>
        ))}
    </section>
  );
};

export default Header;
 