import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const submissionSchema = z.object({
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().regex(/^[+\d\s()-]{6,20}$/),
  role: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(160),
  path: z.string().trim().min(1).max(120),
  terrain: z.string().trim().min(1).max(60),
  learn: z.array(z.string().min(1).max(80)).max(10).default([]),
  features: z.array(z.string().min(1).max(80)).max(10).default([]),
  duolingo: z.string().trim().max(60).optional().default(""),
  price: z.string().trim().max(60).optional().default(""),
  comment: z.string().trim().max(1000).optional().default(""),
});

export const submitDiagnostic = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => submissionSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin
      .from("diagnostic_submissions")
      .insert({
        name: data.name,
        phone: data.phone,
        role: data.role,
        email: data.email,
        path: data.path,
        terrain: data.terrain,
        learn: data.learn,
        features: data.features,
        duolingo: data.duolingo || null,
        price: data.price || null,
        comment: data.comment || null,
      });

    if (error) {
      console.error("[diagnostic_submissions] insert failed", error);
      throw new Error("No pudimos guardar tu solicitud. Inténtalo de nuevo.");
    }

    return { ok: true };
  });
