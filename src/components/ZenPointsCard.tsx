import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

export function ZenPointsCard() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Zen Points</CardTitle>
      </CardHeader>
      <CardContent>
        {/* TODO: Connect with real user points */}
        <p className="text-3xl font-bold">0</p>
      </CardContent>
    </Card>
  )
}

