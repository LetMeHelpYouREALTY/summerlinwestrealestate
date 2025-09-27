import { useCallback, useState } from 'react';

export const useExpandable = (initialState = false) => {
  const [isExpanded, setIsExpanded] = useState(initialState);

  const ariaProps = {
    'aria-expanded': isExpanded,
    onClick: useCallback(() => setIsExpanded((v) => !v), []),
  };

  return { isExpanded, setIsExpanded, ariaProps };
};

export default useExpandable;
