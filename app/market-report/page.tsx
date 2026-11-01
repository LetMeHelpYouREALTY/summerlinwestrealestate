import { permanentRedirect } from "next/navigation";

// Old URL: send visitors and crawlers to the canonical Market Reports page
// with a real 308 instead of a client-side redirect.
export default function MarketReportRedirect() {
  permanentRedirect("/market-reports");
}
