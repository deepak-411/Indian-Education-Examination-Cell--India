import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-headline text-2xl font-bold">Organization Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Delhi Public School.</p>
          </div>
          <Button>
            <PlusCircle className="mr-2"/>
            Request New Paper
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>My Question Paper Requests</CardTitle>
            <CardDescription>
              Track the status of your submitted requests for question papers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-center text-muted-foreground py-8">
              You haven&apos;t made any requests yet.
            </p>
          </CardContent>
        </Card>
    </div>
  )
}
