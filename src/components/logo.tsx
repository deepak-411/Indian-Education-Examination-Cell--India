import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      {...props}
      className={cn(props.className)}
    >
      <path
        fill="hsl(var(--primary))"
        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"
      />
      <path
        fill="hsl(var(--primary-foreground))"
        d="M176,80H124.59L156,54.63a8,8,0,0,0-12-10.73L99,84.58a8,8,0,0,0,0,10.74L144,136.11a8,8,0,1,0,12-10.73L124.59,104H176a8,8,0,0,0,0-16Zm-72.5-34.63L72,80h51.41L92,54.63A8,8,0,0,0,80,44a8,8,0,0,0-3.5.89Z"
        transform="translate(15, 50) scale(0.9)"
      />
      <path
        fill="hsl(var(--primary-foreground))"
        d="M103.5,202.11a8,8,0,0,0,12,10.73L160.41,172,129,146.63a8,8,0,0,0-12,10.73L148.41,180H80a8,8,0,0,0,0,16h68.41l-31.48,25.37A8,8,0,0,0,103.5,202.11Z"
        transform="translate(15, 50) scale(0.9)"
      />
    </svg>
  );
}
