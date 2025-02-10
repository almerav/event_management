import { NextRequest, NextResponse } from "next/server";
import pool from "../db";

export async function POST(req: NextRequest) {
  try {
    const { title, email, event_type, start_datetime, end_datetime, location, description, image_url } = await req.json();

    await pool.query(
      `INSERT INTO events (title, email, event_type, start_datetime, end_datetime, location, description, image_url) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [title, email, event_type, start_datetime, end_datetime, location, description, image_url]
    );

    return NextResponse.json({ message: "Event created successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM events ORDER BY created_at DESC");
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
