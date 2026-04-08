import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const documentType = body?._type as string | undefined;

    const tagMap: Record<string, string[]> = {
      project: ["sanity", "projects"],
      service: ["sanity", "services"],
      product: ["sanity", "products"],
      post: ["sanity", "posts"],
      teamMember: ["sanity", "team"],
      testimonial: ["sanity", "testimonials"],
      siteSettings: ["sanity", "settings"],
    };

    const tags = documentType
      ? (tagMap[documentType] ?? ["sanity"])
      : ["sanity"];

    // Next.js 16 — segundo argumento obrigatório
    for (const tag of tags) {
      revalidateTag(tag, "max");
    }

    return NextResponse.json({
      revalidated: true,
      tags,
      documentType,
      now: Date.now(),
    });
  } catch (err) {
    console.error("[revalidate] Error:", err);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 },
    );
  }
}
