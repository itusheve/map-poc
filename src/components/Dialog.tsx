import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface DialogProps {
  children?: React.ReactNode;
  open: boolean;
  onMount?: () => void;
  onClose?: () => void;
  className?: string;
  backdropClassName?: string;
}

export function Dialog({ open, onMount, onClose, children, className, backdropClassName }: DialogProps) {
  const [mounted, setMounted] = useState(false);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.createElement('div');
    element.setAttribute('id', 'dialog-portal');
    document.body.appendChild(element);
    setPortalElement(element);

    return () => {
      document.body.removeChild(element);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setMounted(true);
    } else {
      const timer = setTimeout(() => {
        setMounted(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    if (mounted && onMount) {
      onMount();
    }
  }, [mounted, onMount]);

  if (!mounted && !open || !portalElement) return null;

  const dialog = (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className={`
        fixed inset-0 z-50 flex flex-col items-center opacity-0 justify-center gap-2 
        backdrop-blur-sm bg-black/30 
        transition-all duration-300
        ${mounted && open ? 'opacity-100' : ''}
        ${open ? '' : 'opacity-0'}
        ${backdropClassName || ''}
      `}
    >
      <div
        role="document"
        onClick={e => e.stopPropagation()}
        className={`
          w-full md:w-auto max-h-full p-2 
          overflow-y-auto shadow-xl
          transition-all duration-300
          ${open ? '' : 'scale-95'}
          ${className || ''}
        `}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(dialog, portalElement);
}

export default Dialog;