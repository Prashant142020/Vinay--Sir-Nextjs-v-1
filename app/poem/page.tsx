import HindiPoems from "@/components/HindiPoems";
import { hindiPoems } from "@/lib/data/poem";
import React from "react";

const page = () => {
  return (
    <main className="py-8">
      <HindiPoems poems={hindiPoems} />
    </main>
  );
};

export default page;
