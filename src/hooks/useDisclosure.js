import  { useState } from "react";

function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenChange = (open) => {
    setIsOpen(open);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return { isOpen, onOpen, onClose, onOpenChange };
}

export default useDisclosure;
