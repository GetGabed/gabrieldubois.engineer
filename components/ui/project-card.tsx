import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "../../utils/cn";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
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
  link,
  image,
  video,
  links,
  className,
}: Readonly<Props>) {
  return (
    <Card
      className={
        "flex flex-1 flex-col overflow-hidden border border-primary hover:shadow-lg transition-all duration-300 ease-out h-full hover:-translate-y-2"
      }
    >
      <Link
        href={href ?? "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${video}`}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2 flex-1">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full font-sans text-xs text-foreground dark:prose-invert line-clamp-3">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-nowrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-1 px-1.5 py-1 text-[10px] sm:gap-2 sm:px-2 bg-[#a2a7fb] hover:bg-opacity-40">
                  {link.icon}
                  <span className="hidden sm:inline">{link.type}</span>
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}