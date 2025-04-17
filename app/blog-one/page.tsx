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

const LeadGenChatbotArticle = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Lead Generation Chatbot for B2B SaaS Companies
      </h1>

      <h2 className="text-2xl font-bold">Relevance</h2>
      <p>
        SaaS founders and marketing teams are likely searching for ways to automate lead capture on their website. A query like this comes straight from AeroChat’s ICP – they want a chatbot that can engage visitors and gather leads 24/7 instead of using static forms. In fact, users on forums explicitly look for “a sales agent chatbot” to gather leads for B2B SaaS​ reddit.com, showing direct interest in this capability.
      </p>

      <h2 className="text-2xl font-bold">Content Gap</h2>
      <p>
        While there are blogs about chatbot lead generation, many are superficial or tool-centric. Some “best chatbot for lead gen” lists still mention outdated or non-AI bots (e.g. naming Chatfuel or Instabot among top tools)​ blog.getodin.ai, indicating the content hasn’t caught up with the new AI-driven solutions. There’s a lack of case-study-driven content showing how a chatbot improves B2B SaaS lead funnels (e.g. qualifying questions to identify product-fit, scheduling a demo). Existing articles tend to either just state benefits or list software without depth.
      </p>

      <h2 className="text-2xl font-bold">How an Article Could Fill the Gap</h2>
      <p>
        AeroChat could publish an in-depth guide like “How to Boost SaaS Lead Generation with an AI Chatbot”. It would explain step-by-step how a chatbot greets visitors, what qualifying questions to ask (perhaps using examples from successful SaaS implementations), and include data (like X% increase in MQLs after using AI chat). By focusing on B2B SaaS needs – such as integrating the chatbot with CRM to hand off hot leads to sales – the content would resonate more than generic advice. It could also address common concerns (ensuring the bot doesn’t annoy visitors, how to handle technical product questions, etc.), thereby filling the practical knowledge gap.
      </p>
    </div>
  )
}

const keywordsData = [
  { keyword: "lead generation chatbot for SaaS", intent: "Transactional" },
  { keyword: "AI chatbot for B2B lead capture", intent: "Informational" },
  { keyword: "best chatbot for SaaS companies", intent: "Informational" },
  { keyword: "how to use chatbot for SaaS leads", intent: "Informational" },
  { keyword: "SaaS chatbot CRM integration", intent: "Transactional" },
  { keyword: "chatbot qualifying questions B2B", intent: "Informational" },
]

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            SEO Keyword Plan: Lead Gen Chatbot for B2B SaaS
          </h1>
          <p className="mt-2 text-muted-foreground">
            A blog designed for B2B SaaS founders and marketers exploring AI chatbot automation to increase qualified leads.
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
            <LeadGenChatbotArticle />
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
