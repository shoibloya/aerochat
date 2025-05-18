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
        Effortless Support: Automating WhatsApp Customer Service Without Writing a Line of Code
      </h1>

      <h2 className="text-2xl font-bold">Content Gap</h2>
      <p>
        Existing resources on automating customer support via WhatsApp often focus on integrating the WhatsApp Business API, which typically requires technical expertise or reliance on third-party tools. This approach can be daunting for non-developers and small businesses lacking technical resources. There's a scarcity of comprehensive, step-by-step guides that demonstrate how to set up automated customer support on WhatsApp without any coding, making the process accessible to a broader audience.
      </p>

      <h2 className="text-2xl font-bold">How to Fill the Gap</h2>
      <p>
        An article could provide a detailed, step-by-step guide on how AeroChat enables businesses to set up automated customer support on WhatsApp without any coding. It should highlight the platform's user-friendly interface, ease of integration, and the benefits of 24/7 customer engagement. Including real-world examples, performance metrics, and testimonials would offer a compelling, in-depth resource that addresses the current content void.
      </p>
    </div>
  )
}

const keywordsData = [
  { keyword: "automate WhatsApp customer support", intent: "Informational" },
  { keyword: "WhatsApp chatbot no coding", intent: "Informational" },
  { keyword: "AeroChat WhatsApp automation", intent: "Transactional" },
  { keyword: "WhatsApp Business chatbot setup", intent: "Informational" },
  { keyword: "no-code WhatsApp chatbot", intent: "Informational" },
  { keyword: "24/7 WhatsApp customer service automation", intent: "Informational" },
]

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            SEO Keyword Plan: How to Automate Customer Support on WhatsApp Without Coding
          </h1>
          <p className="mt-2 text-muted-foreground">
            A guide for small business owners and customer service managers exploring no-code solutions to implement automated customer support on WhatsApp.
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
