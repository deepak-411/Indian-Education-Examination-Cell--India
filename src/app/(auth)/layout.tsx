import { Logo } from "@/components/logo";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
            <Link href="/" className="flex items-center gap-3">
              <Logo className="size-10" />
              <span className="font-headline text-2xl font-bold tracking-tight">
                Indian Education Exam Cell
              </span>
            </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
