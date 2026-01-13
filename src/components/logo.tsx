import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="https://media.licdn.com/dms/image/v2/D5603AQExuYb4L7iPDw/profile-displayphoto-scale_400_400/B56Zu1vQFSIsAk-/0/1768280622226?e=1769644800&v=beta&t=29Idls3BRoFa5cEPvnD7FBUyFY1GQXS8u37Na33U0Kw"
      alt="Indian Education Exam Cell Logo"
      width={400}
      height={400}
      className={cn("", className)}
      unoptimized
    />
  );
}
