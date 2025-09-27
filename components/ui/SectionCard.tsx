import type React from 'react';
import { type ElementType, forwardRef } from 'react';

type SectionCardOwnProps<E extends ElementType = 'section'> = {
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  as?: E;
  testId?: string;
  children?: React.ReactNode;
} & Omit<
  React.ComponentPropsWithoutRef<E>,
  'as' | 'ref' | 'className' | 'style' | 'aria-label' | 'aria-labelledby' | 'data-testid'
>;

const SectionCard = forwardRef(function SectionCard<E extends ElementType = 'section'>(
  {
    children,
    className = '',
    style,
    ariaLabel,
    ariaLabelledBy,
    as,
    testId,
    ...restProps
  }: SectionCardOwnProps<E>,
  ref: React.Ref<HTMLElement>
) {
  const Component = as || 'section';
  return (
    <Component
      ref={ref}
      className={`sectionCard ${className}`.trim()}
      style={style}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      data-testid={testId}
      {...restProps}
    >
      {children}
    </Component>
  );
}) as <E extends ElementType = 'section'>(
  props: SectionCardOwnProps<E> & { ref?: React.Ref<HTMLElement> }
) => React.ReactElement | null;

// Fix displayName linter error by casting to unknown then to typeof SectionCard
(SectionCard as unknown as { displayName: string }).displayName = 'SectionCard';

export default SectionCard;

// Usage examples:
// <SectionCard ariaLabel="User profile section">
// <SectionCard ariaLabelledBy="heading-id" as="article">
// <SectionCard className="highlight" testId="dashboard-summary">
// <SectionCard as="aside" className="sidebar-card"></thinking>
