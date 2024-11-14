import { createContext, useContext, useState } from "react";

export interface AccordionProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
  className?: string;
  triggerClassName?: string;
}

export interface AccordionTriggerProps {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export interface AccordionContentProps {
  children?: React.ReactNode;
  className?: string;
}

const AccordionContext = createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
} | null>(null);

export const Accordion = ({
  children,
  className,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: AccordionProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  return (
    <AccordionContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionTrigger = ({
  children,
  className,
  icon,
}: AccordionTriggerProps) => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error("AccordionTrigger must be used within an Accordion");
  const { open, onOpenChange } = context;

  return (
    <button
      className={`flex items-center gap-2 justify-between ${className}`}
      onClick={() => onOpenChange(!open)}
    >
      <span>{children}</span>
      {icon ?? (
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      )}
    </button>
  );
};

const AccordionContent = ({ children, className }: AccordionContentProps) => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error("AccordionContent must be used within an Accordion");
  const { open } = context;

  return (
    <div
      className={`transition-[grid-template-rows] grid duration-150 ${
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};

Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;