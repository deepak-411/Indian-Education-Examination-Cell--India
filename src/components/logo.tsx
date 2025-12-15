import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-primary", className)}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Indian Education Exam Cell Logo</title>
      <path
        d="M128 24C64.9 24 24 64.9 24 128S64.9 232 128 232s104-40.9 104-104S191.1 24 128 24zm0 192c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88z"
        fill="currentColor"
      />
      <path
        d="M160.7 90.1c-14.4-14.4-37.8-14.4-52.2 0l-7.3 7.3c-2.3 2.3-2.3 6.1 0 8.5l11.3 11.3c2.3 2.3 6.1 2.3 8.5 0l7.3-7.3c4.1-4.1 10.7-4.1 14.8 0l11.3 11.3c2.3 2.3 6.1 2.3 8.5 0l11.3-11.3c2.4-2.3 2.4-6.1 0-8.5l-13.5-11.3z"
        fill="hsl(var(--accent))"
      />
      <path
        d="M128.5 152.1c-10.4 0-18.8 8.4-18.8 18.8s8.4 18.8 18.8 18.8 18.8-8.4 18.8-18.8-8.5-18.8-18.8-18.8zm0 25.3c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z"
        fill="currentColor"
      />
    </svg>
  );
}
