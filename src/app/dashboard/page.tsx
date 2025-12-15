import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Organization Dashboard</CardTitle>
            <CardDescription>
              Welcome to your dashboard. Manage your question papers and requests here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the dashboard for registered organizations. Functionality to request new papers and view existing ones will be built out here.</p>
          </CardContent>
        </Card>
    </div>
  )
}
