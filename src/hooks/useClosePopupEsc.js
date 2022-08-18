import React from "react";
import { unlockScroll } from "../utils/scroll"

function useClosePopupEsc(isOpen, setIsOpen) {
  React.useEffect(() => {
    function handleEscapeKey(evt) {
      if (evt.key === 'Escape') {
        setIsOpen(false);
        unlockScroll();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      }
    }
  }, [isOpen, setIsOpen]);
}

export default useClosePopupEsc;