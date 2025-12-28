"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { InquiryTypeId } from "@/lib/form-data";

interface InquiryModalContextType {
  isOpen: boolean;
  preselectedType: InquiryTypeId | null;
  openModal: (preselectedType?: InquiryTypeId) => void;
  closeModal: () => void;
}

const InquiryModalContext = createContext<InquiryModalContextType | undefined>(
  undefined
);

export function InquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedType, setPreselectedType] = useState<InquiryTypeId | null>(
    null
  );

  const openModal = useCallback((type?: InquiryTypeId) => {
    setPreselectedType(type || null);
    setIsOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setPreselectedType(null);
    // Restore body scroll
    document.body.style.overflow = "";
  }, []);

  return (
    <InquiryModalContext.Provider
      value={{ isOpen, preselectedType, openModal, closeModal }}
    >
      {children}
    </InquiryModalContext.Provider>
  );
}

export function useInquiryModal() {
  const context = useContext(InquiryModalContext);
  if (context === undefined) {
    throw new Error(
      "useInquiryModal must be used within an InquiryModalProvider"
    );
  }
  return context;
}
