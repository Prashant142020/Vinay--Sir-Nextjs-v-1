import Link from "next/link";
import { Button } from "./ui/button";

export interface ContentData {
  number: string;
  heading: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const ContentBlock = ({
  number,
  heading,
  description,
  linkText,
  linkHref,
}: ContentData) => {
  return (
    <div className="flex items-start gap-2 sm:gap-4">
      <div className="text-2xl">{number}.</div>
      <div>
        <div className="mb-1 text-2xl sm:mb-2">{heading}</div>
        <p className="text-justify text-muted-foreground">{description}</p>
        <Button variant="default" className="mb-10 mt-4">
          <Link href={linkHref}>{linkText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default ContentBlock;
