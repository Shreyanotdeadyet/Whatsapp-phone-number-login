import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const lat = searchParams.get("lat");
    const long = searchParams.get("long");
    const uagent = req.headers.get("user-agent");
    const ip = req.headers.get("x-forwarded-for") || "Unknown IP";

    console.log("Received location data:", { lat, long, ip, uagent });

    return NextResponse.json({ success: true, message: "Data received" });
}
