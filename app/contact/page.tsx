import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckIcon, MailIcon, PhoneIcon } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="h-screen py-12">
      <div className="rounded-lg p-1 shadow-sm">
        <div className="mb-6 flex items-center space-x-4">
          <div>
            <h1 className="text-2xl font-bold">VINAY SHARMA</h1>
            <p className="text-muted-foreground">
              Department of Management Studies, Indian Institute of Technology
              (IIT), Roorkee – 247667
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <h2 className="mb-2 text-2xl font-semibold">
              Fields of Specialization
            </h2>
            <div className="text-muted-foreground">
              <CheckIcon className="mr-2 inline-block h-4 w-4" /> Strategic
              Management
            </div>
            <div className="text-muted-foreground">
              <CheckIcon className="mr-2 inline-block h-4 w-4" /> Spirituality
              and Strategy
            </div>
            <div className="text-muted-foreground">
              <CheckIcon className="mr-2 inline-block h-4 w-4" /> Stop
              Predicting
            </div>
            <div className="text-muted-foreground">
              <CheckIcon className="mr-2 inline-block h-4 w-4" /> Marketing
            </div>
            <div className="text-muted-foreground">
              <CheckIcon className="mr-2 inline-block h-4 w-4" /> Forest
              Bio-Residue and Low-Cost Energy
            </div>
            <div className="text-muted-foreground">
              <CheckIcon className="mr-2 inline-block h-4 w-4" /> Capability
              Development
            </div>
            <div className="text-muted-foreground">
              <CheckIcon className="mr-2 inline-block h-4 w-4" /> Marketing
              Innovation
            </div>
            <div className="text-muted-foreground">
              <CheckIcon className="mr-2 inline-block h-4 w-4" /> Design
              Thinking
            </div>
            <div className="text-muted-foreground">
              <CheckIcon className="mr-2 inline-block h-4 w-4" /> Integrated
              Marketing Communication
            </div>
            <div className="text-muted-foreground">
              <CheckIcon className="mr-2 inline-block h-4 w-4" /> Brand
              Development
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Address for Correspondence</h2>
            <div className="space-y-2">
              <div>
                <p className="text-muted-foreground">
                  Department of Management Studies,
                  <br />
                  Indian Institute of Technology (IIT),
                  <br />
                  Roorkee
                </p>
              </div>
              <div className="grid gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5" />
                  <span>+91 1332 285175</span>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5" />
                  <span>vinay.sharma@ms.iitr.ac.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
