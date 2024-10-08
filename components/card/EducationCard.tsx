import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const EducationCard = () => {
  return (
    <div className="max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold">Education</h1>
      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src="/user.jpg" alt="Hack Western 5" />
            <AvatarFallback>HW5</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-muted-foreground">1992</p>
            <h2 className="text-xl font-semibold">Graduation BSBA</h2>
            <p className="text-sm text-muted-foreground">VMUF, PHILIPPINES</p>
            <p>
              MARKETING, HUMAN RESOURCE MANAGEMENT, FINANCIAL MANAGEMENT,
              PRODUCTION MANAGEMENT, ACCOUNTING MANAGEMENT
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src="/user.jpg" alt="Hack The North" />
            <AvatarFallback>HTN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-muted-foreground">1994</p>
            <h2 className="text-xl font-semibold">Master Degree MBA</h2>
            <p className="text-sm text-muted-foreground">
              PHILIPPINE CHRISTIAN UNIVERSITY, MANILA, PHILIPPINES
            </p>
            <p>
              MARKETING MANAGEMENT, HUMAN RESOURCE MANAGEMENT, FINANCIAL
              MANAGEMENT, PRODUCTION MANAGEMENT, ACCOUNTING MANAGEMENT
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage
              src="/user.jpg"
              alt="FirstNet Public Safety Hackathon"
            />
            <AvatarFallback>FPSH</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-muted-foreground">
              March 23rd - 24th, 2018
            </p>
            <h2 className="text-xl font-semibold">
              FirstNet Public Safety Hackathon
            </h2>
            <p className="text-sm text-muted-foreground">
              San Francisco, California
            </p>
            <p>
              Developed a mobile application which communicates a victims
              medical data from inside an ambulance to doctors at hospital.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src="/user.jpg" alt="DeveloperWeek Hackathon" />
            <AvatarFallback>DWH</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-muted-foreground">
              February 3rd - 4th, 2018
            </p>
            <h2 className="text-xl font-semibold">DeveloperWeek Hackathon</h2>
            <p className="text-sm text-muted-foreground">
              San Francisco, California
            </p>
            <p>
              Developed a web application which aggregates social media data
              regarding cryptocurrencies and predicts future prices.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src="/user.jpg" alt="HackDavis" />
            <AvatarFallback>HD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-muted-foreground">
              January 20th - 21st, 2018
            </p>
            <h2 className="text-xl font-semibold">HackDavis</h2>
            <p className="text-sm text-muted-foreground">Davis, California</p>
            <p>
              Developed a mobile application which allocates a daily carbon
              emission allowance to users to move towards a sustainable
              environment.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src="/user.jpg" alt="ETH Waterloo" />
            <AvatarFallback>ETHW</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-muted-foreground">
              October 13th - 15th, 2017
            </p>
            <h2 className="text-xl font-semibold">ETH Waterloo</h2>
            <p className="text-sm text-muted-foreground">Waterloo, Ontario</p>
            <p>
              Developed a blockchain application for doctors and pharmacists to
              perform trustless transactions and prevent overdosage in patients.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src="/user.jpg" alt="Hack The North" />
            <AvatarFallback>HTN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-muted-foreground">
              September 15th - 17th, 2017
            </p>
            <h2 className="text-xl font-semibold">Hack The North</h2>
            <p className="text-sm text-muted-foreground">Waterloo, Ontario</p>
            <p>
              Developed a virtual reality application allowing users to see
              themselves in third person.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src="/user.jpg" alt="Hack The 6ix" />
            <AvatarFallback>HT6</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-muted-foreground">
              August 26th - 27th, 2017
            </p>
            <h2 className="text-xl font-semibold">Hack The 6ix</h2>
            <p className="text-sm text-muted-foreground">Toronto, Ontario</p>
            <p>
              Developed an open platform for people shipping items to same place
              to combine shipping costs and save money.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
