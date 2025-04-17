// lib/tasks.ts
export type Task = {
  id: number
  title: string
  description: string
  date: string
  completed?: boolean
  location?: string
  tags?: string[]
  colorIndex?: number
}

export const tasks: Task[] = [
  {
    id: 1,
    title: "Client Onboarded",
    description: "Start of Subscription",
    date: "2025-04-12T00:00:00Z",
    colorIndex: 3,
    tags: ["Admin"],
    completed: true,
  },
  {
    id: 2,
    title: "Website Analysed",
    description: "Nuggt team analysed the website and created the blog strategy.",
    date: "2025-04-18T00:00:00Z",
    colorIndex: 4,
    tags: ["Admin"],
    completed: true,
  },
  {
    id: 3,
    title: "First Blog Post",
    description: "WhatsApp and Website Chatbot Integration for Customer Support",
    date: "2025-04-25T00:00:00Z",
    colorIndex: 2,
    tags: ["Blog"],
    completed: false,
  },
  {
    id: 4,
    title: "Second Blog Post",
    description: "Lead Generation Chatbot for B2B SaaS Companies",
    date: "2025-05-02T00:00:00Z",
    colorIndex: 2,
    tags: ["Blog"],
    completed: false,
  },
  {
    id: 5,
    title: "Third Blog Post",
    description: "AI Chatbot to Reduce Customer Support Tickets",
    date: "2025-05-05T00:00:00Z",
    colorIndex: 2,
    tags: ["Blog"],
    completed: false,
  },
  {
    id: 6,
    title: "Fourth Blog Post",
    description: "Shopify AI Chatbot (No-Code Integration)",
    date: "2025-05-09T00:00:00Z",
    colorIndex: 2,
    tags: ["Blog"],
    completed: false,
  },

  {
    id: 7,
    title: "Subscription Renewable",
    description: "Subscription Renew Date.",
    date: "2025-05-12T00:00:00Z",
    colorIndex: 3,
    tags: ["Admin"],
    completed: false,
  },
]
