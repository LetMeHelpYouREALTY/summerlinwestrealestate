import assert from "node:assert/strict";
import { describe, it, mock } from "node:test";
import {
  buildFubEventPayload,
  FUB_EVENTS_URL,
  FUB_SOURCE,
  parseLeadBody,
  resolveFubEventType,
  sendFubLeadEvent,
} from "./fub-lead.ts";

describe("parseLeadBody", () => {
  it("rejects empty body", () => {
    const result = parseLeadBody({});
    assert.equal(result.ok, false);
    if (!result.ok) {
      assert.match(result.error, /name/i);
    }
  });
});

describe("buildFubEventPayload", () => {
  it("uses FUB person email and phone shape", () => {
    const payload = buildFubEventPayload({
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "7025551234",
      page: "Contact Page",
      sourceUrl: "https://www.summerlinwestrealestate.com/contact",
    });

    assert.equal(payload.source, FUB_SOURCE);
    assert.equal(payload.system, FUB_SOURCE);
    assert.equal(payload.type, "General Inquiry");
    assert.deepEqual(payload.person.emails, [{ value: "jane@example.com" }]);
    assert.deepEqual(payload.person.phones, [{ value: "7025551234" }]);
    assert.ok(payload.person.tags?.includes(FUB_SOURCE));
  });

  it("maps seller interest to Seller Inquiry", () => {
    const type = resolveFubEventType({
      name: "Test",
      propertyInterest: "sell",
      page: "Home",
    });
    assert.equal(type, "Seller Inquiry");
  });
});

describe("sendFubLeadEvent", () => {
  it("posts to FUB events with Basic auth", async () => {
    const payload = buildFubEventPayload({
      name: "Jane Doe",
      email: "jane@example.com",
      page: "Test",
    });

    const fetchMock = mock.fn(async (url: string, init?: RequestInit) => {
      assert.equal(url, FUB_EVENTS_URL);
      assert.equal(init?.method, "POST");
      const headers = init?.headers as Record<string, string>;
      assert.equal(headers["Content-Type"], "application/json");
      assert.equal(headers["X-System"], FUB_SOURCE);
      assert.match(headers.Authorization, /^Basic /);
      return new Response(null, { status: 201 });
    });

    const result = await sendFubLeadEvent(
      "test-api-key",
      payload,
      fetchMock as typeof fetch,
    );
    assert.equal(result.ok, true);
    assert.equal(fetchMock.mock.calls.length, 1);
  });
});
