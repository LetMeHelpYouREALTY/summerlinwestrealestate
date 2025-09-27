'use client';

import { useCallback, useState } from 'react';

interface LeadCaptureModal {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  submitLead: (data: LeadData) => Promise<void>;
}

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

export const useLeadCaptureModal = (): LeadCaptureModal => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const submitLead = useCallback(
    async (data: LeadData) => {
      try {
        // Add your lead submission logic here
        console.log('Submitting lead:', data);

        // Example API call (replace with your actual endpoint)
        // await fetch('/api/leads', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data)
        // });

        closeModal();
      } catch (error) {
        console.error('Error submitting lead:', error);
      }
    },
    [closeModal]
  );

  return {
    isOpen,
    openModal,
    closeModal,
    submitLead,
  };
};

export default useLeadCaptureModal;
