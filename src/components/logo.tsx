import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="https://storage.googleapis.com/aifirebase-static-content/studio-classic-reps/88e583cfdeb2/logo.png"
      alt="Indian Education Exam Cell Logo"
      width={256}
      height={256}
      className={cn("invert-0 dark:invert", className)}
      unoptimized
    />
  );
}
