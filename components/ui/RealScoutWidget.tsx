type RealScoutWidgetProps = {
  priceMin: number;
  priceMax?: number;
  agentId?: string;
};

export default function RealScoutWidget({
  priceMin,
  priceMax = 1200000,
  agentId = 'QWdlbnQtMjI1MDUw',
}: RealScoutWidgetProps) {
  return (
    <realscout-office-listings
      agent-encoded-id={agentId}
      sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
      listing-status="For Sale"
      property-types="SFR,MF,TC"
      price-min={priceMin}
      price-max={priceMax}
    ></realscout-office-listings>
  );
}
