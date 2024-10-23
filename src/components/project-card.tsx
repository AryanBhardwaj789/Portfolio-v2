import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full max-w-md" // Increase max-width to make cards wider
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-52 w-full object-cover object-top" // Increased height
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={600} // Increased width
            height={400} // Increased height
            className="h-52 w-full overflow-hidden object-cover object-top" // Adjusted height
          />
        )}
      </Link>
      <CardHeader className="px-4"> {/* Increased padding */}
        <div className="space-y-1">
          <CardTitle className="mt-4 text-lg">{title}</CardTitle> {/* Increased font size */}
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="mt-4 prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-2 flex flex-col px-4"> {/* Increased padding */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2"> {/* Increased gap */}
            {tags?.map((tag) => (
              <Badge
                className="px-2 py-1 text-[10px]" // Adjusted padding
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-4 pb-4"> {/* Increased padding */}
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-2"> {/* Increased gap */}
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-3 py-2 text-[10px]"> {/* Increased padding */}
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
