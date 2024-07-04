import { NextResponse } from "next/server";

export const GET = async() => NextResponse.json(
  
  { status: 200 },
  {
    time: new Date().toISOString()
  }
)