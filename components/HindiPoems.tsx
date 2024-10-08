"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Poem } from "@/lib/types/poem";

interface PoemsProps {
  poems: Poem[];
}

const PoemCard: React.FC<Poem> = ({ title, content }) => (
  <Card className="border-none shadow-sm">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="whitespace-pre-line text-lg">{content}</p>
    </CardContent>
  </Card>
);

const HindiPoems: React.FC<PoemsProps> = ({ poems }) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {poems.map((poem, index) => (
      <PoemCard key={index} {...poem} />
    ))}
  </div>
);

export default HindiPoems;
