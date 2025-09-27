declare namespace JSX {
  interface IntrinsicElements {
    'realscout-office-listings': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      'agent-encoded-id'?: string;
      'price-min'?: string | number;
      'price-max'?: string | number;
      // Add other attributes as needed
    };
  }
}
