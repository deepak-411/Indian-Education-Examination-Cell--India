import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="https://media.licdn.com/dms/image/v2/D5603AQFKhenA1VkXAA/profile-displayphoto-scale_400_400/B56ZslvghEHAAg-/0/1765864772679?e=1767225600&v=beta&t=h83aYL4RglhaUzVLRvwLTgowhOAD4zH4ksPh2nooOLQ"
      alt="Indian Education Exam Cell Logo"
      width={400}
      height={400}
      className={cn("", className)}
      unoptimized
    />
  );
}
