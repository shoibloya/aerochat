// app/api/agents/route.ts
import { NextResponse } from "next/server"
import { getAgents } from "@/lib/agents"

export async function GET() {
  const agents = await getAgents()
  return NextResponse.json(agents)
}
