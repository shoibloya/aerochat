"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const BlogArticle = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Smarter Seasonal Support: How AI Chatbots Help You Scale Without Hiring
      </h1>

      <h2 className="text-2xl font-bold">Content Gap</h2>
      <p>
        Existing search results on scaling customer support during peak seasons often suggest hiring temporary staff or extending support hours. Few resources delve into leveraging AI chatbots to manage increased customer inquiries efficiently during high-demand periods. Additionally, there's a lack of content showcasing specific solutions like AeroChat that offer seamless integration and measurable performance improvements.
      </p>

      <h2 className="text-2xl font-bold">How to Fill the Gap</h2>
      <p>
        An article could comprehensively explore how AI chatbots, particularly AeroChat, enable businesses to handle surges in customer inquiries during peak seasons without additional staffing. It should highlight features such as 24/7 availability, instant response times, and the ability to manage multiple conversations simultaneously. Including performance metrics—like AeroChat's 87% resolution rate without human intervention and 14 hours saved per support agent weekly —alongside testimonials from satisfied clients, would provide a compelling, in-depth resource that current content lacks.
      </p>
    </div>
  )
}

const keywordsData = [
  { keyword: "AI chatbots for peak season support", intent: "Informational" },
  { keyword: "scalable customer service AI", intent: "Informational" },
  { keyword: "automate customer support during holidays", intent: "Informational" },
  { keyword: "AeroChat chatbot solution", intent: "Transactional" },
  { keyword: "handle customer inquiries with AI", intent: "Informational" },
  { keyword: "reduce support costs with chatbots", intent: "Informational" },
]

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            SEO Keyword Plan: Enhancing Customer Support During Peak Seasons with AI Chatbots
          </h1>
          <p className="mt-2 text-muted-foreground">
            A guide for customer support leaders and operations managers exploring scalable AI chatbot solutions to manage seasonal surges without increasing headcount.
          </p>
        </header>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Keyword Analysis</CardTitle>
            <CardDescription>
              Target keywords and their search intent
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Keyword</TableHead>
                    <TableHead>Intent</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keywordsData.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{item.keyword}</TableCell>
                      <TableCell>
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {item.intent}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              <div className="bg-blue-200 text-blue-900 font-bold p-4 rounded-xl text-lg text-center">
                Blog Content Idea
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BlogArticle />
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
