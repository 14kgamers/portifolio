import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
  const data = [
    {
      title: "November 2021",
      content: (
        <div>
          <h1 className="text-3xl">
            DurliCouros (PCM)
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 mt-8">
            ✅  Controlled and scheduled maintenance work orders. <br /> 
            ✅  I’ve optimized
            existing processes by implementing employee feedback. <br /> 
             <br />
            
          </p>
        </div>
      ),
    },
    {
      title: "April 2024 - NOW",
      content:
      ( 
        <div>
          <h1 className="text-3xl">
          Forvia(trainee IT)
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 mt-8">
            ✅  Network Management <br /> 
            ✅  VLAN Modification <br /> 
            ✅  Account Management <br /> 
            ✅  User Support | Manipulation of user and device access<br /> 
            ✅  Support N1 (ServiceNow | BPA | IJCore | SAP| Ivanti NDC| DHCP | DNS | Citrix)<br /> 
          </p>
        </div>
      )
    },
    
    
  ];
  return (
    
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
