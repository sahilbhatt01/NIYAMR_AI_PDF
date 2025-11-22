import { NextResponse } from "next/server";
import * as pdfParseModule from "pdf-parse"; // ESM import

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const pdfFile = formData.get("pdf") as File | null;

    if (!pdfFile) {
      return NextResponse.json({ error: "No PDF uploaded" }, { status: 400 });
    }

    // Convert PDF to Uint8Array
    const arrayBuffer = await pdfFile.arrayBuffer();
    const uint8 = new Uint8Array(arrayBuffer);

    // // Parse PDF
    // const parsed = await pdfParseModule.default(uint8);
    // const text = parsed.text || "";

    return NextResponse.json({ results: [] });
  } catch (err: any) {
    console.error("PDF API Error:", err);
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}
