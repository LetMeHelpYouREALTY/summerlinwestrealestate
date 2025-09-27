// declarations.d.ts

interface Window {
  Homebot?: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    "realscout-simple-search": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      "agent-encoded-id"?: string;
      "aria-label"?: string;
    };
    "realscout-office-listings": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      "office-id"?: string;
      "office-name"?: string;
      [key: string]: any;
    };
  }
}

// React Modal types
declare module 'react-modal' {
  import { ComponentType, ReactNode } from 'react';

  export interface ModalProps {
    isOpen: boolean;
    onRequestClose?: () => void;
    onAfterOpen?: () => void;
    onAfterClose?: () => void;
    shouldCloseOnOverlayClick?: boolean;
    shouldCloseOnEsc?: boolean;
    shouldReturnFocusAfterClose?: boolean;
    preventScroll?: boolean;
    bodyOpenClassName?: string;
    htmlOpenClassName?: string;
    ariaHideApp?: boolean;
    overlayClassName?: string | object;
    className?: string | object;
    portalClassName?: string;
    overlayRef?: (overlay: HTMLDivElement) => void;
    contentRef?: (content: HTMLDivElement) => void;
    overlayElement?: (props: any, contentEl: ReactNode) => ReactNode;
    contentElement?: (props: any, children: ReactNode) => ReactNode;
    parentSelector?: () => HTMLElement;
    role?: string;
    contentLabel?: string;
    aria?: object;
    data?: object;
    testId?: string;
    id?: string;
    children?: ReactNode;
    overlay?: boolean;
  }

  const Modal: ComponentType<ModalProps>;
  export default Modal;

  export function setAppElement(element: HTMLElement | string): void;
}
