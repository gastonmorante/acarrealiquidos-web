import { NextResponse } from "next/server";
import newsData from "@/data/newsData.json";

export const dynamic = "force-static";
export const revalidate = 3600; // revalidate every hour

export async function GET(request: Request) {
  try {
    return NextResponse.json(newsData, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error serving news:", error);
    return NextResponse.json({ error: "Failed to load news" }, { status: 500 });
  }
}
