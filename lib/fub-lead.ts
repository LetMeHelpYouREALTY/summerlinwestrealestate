export const FUB_SOURCE = "summerlinwestrealestate.com";
export const FUB_EVENTS_URL = "https://api.followupboss.com/v1/events";

export type LeadInput = {
  name: string;
  email?: string;
  phone?: string;
  message?: string;
  propertyInterest?: string;
  page?: string;
  sourceUrl?: string;
};

export function splitName(fullName: string): {
  firstName: string;
  lastName: string;
} {
  const trimmed = fullName.trim();
  const parts = trimmed.split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return { firstName: "", lastName: "" };
  }
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

export function resolveFubEventType(input: LeadInput): string {
  const interest = (input.propertyInterest ?? "").toLowerCase();
  const page = (input.page ?? "").toLowerCase();

  if (page.includes("listing") || page.includes("current-listing")) {
    return "Property Inquiry";
  }
  if (page.includes("vistas listing")) {
    return "Property Inquiry";
  }
  if (interest === "sell" || interest === "valuation") {
    return "Seller Inquiry";
  }
  if (
    interest === "market-report" ||
    page.includes("market report") ||
    page.includes("guide") ||
    page === "the vistas"
  ) {
    return "Registration";
  }
  return "General Inquiry";
}

export function buildFubEventPayload(input: LeadInput) {
  const { firstName, lastName } = splitName(input.name);
  const formName = input.page?.trim() || "Website Lead";
  const type = resolveFubEventType(input);

  const summaryLines: string[] = [];
  if (input.propertyInterest) {
    summaryLines.push(`Property interest: ${input.propertyInterest}`);
  }
  if (input.phone) {
    summaryLines.push(`Phone: ${input.phone}`);
  }
  if (input.email) {
    summaryLines.push(`Email: ${input.email}`);
  }

  const visitorMessage = input.message?.trim();
  const messageParts = [visitorMessage, summaryLines.join("\n")].filter(
    Boolean,
  );
  const message =
    messageParts.join("\n\n") || `New lead from ${formName} on ${FUB_SOURCE}`;

  return {
    source: FUB_SOURCE,
    system: FUB_SOURCE,
    type,
    message,
    description: `${formName}`,
    sourceUrl: input.sourceUrl?.trim() || `https://www.summerlinwestrealestate.com`,
    person: {
      firstName,
      lastName,
      emails: input.email ? [{ value: input.email }] : [],
      phones: input.phone ? [{ value: input.phone }] : [],
      tags: [FUB_SOURCE, formName],
    },
  };
}

export function parseLeadBody(
  body: Record<string, unknown>,
): { ok: true; data: LeadInput } | { ok: false; error: string } {
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message =
    typeof body.message === "string" ? body.message.trim() : undefined;
  const propertyInterest =
    typeof body.propertyInterest === "string"
      ? body.propertyInterest.trim()
      : undefined;
  const page = typeof body.page === "string" ? body.page.trim() : undefined;
  const sourceUrl =
    typeof body.sourceUrl === "string" ? body.sourceUrl.trim() : undefined;

  if (!name) {
    return { ok: false, error: "Name is required" };
  }
  if (!email && !phone) {
    return { ok: false, error: "Email or phone is required" };
  }

  return {
    ok: true,
    data: {
      name,
      email: email || undefined,
      phone: phone || undefined,
      message,
      propertyInterest,
      page,
      sourceUrl,
    },
  };
}

export async function sendFubLeadEvent(
  apiKey: string,
  payload: ReturnType<typeof buildFubEventPayload>,
  fetchImpl: typeof fetch = fetch,
): Promise<{ ok: true } | { ok: false; status?: number }> {
  try {
    const response = await fetchImpl(FUB_EVENTS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`,
        "X-System": FUB_SOURCE,
      },
      body: JSON.stringify(payload),
    });

    if (response.status === 200 || response.status === 201 || response.status === 204) {
      return { ok: true };
    }

    return { ok: false, status: response.status };
  } catch {
    return { ok: false };
  }
}
