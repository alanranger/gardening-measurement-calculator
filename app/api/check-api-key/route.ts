import { NextResponse } from "next/server"

export async function GET() {
  const apiKey = process.env.WILLY_WEATHER_API_KEY

  return NextResponse.json({
    keyStatus: apiKey ? "configured" : "not-configured",
  })
}
