import { useState } from "react";

export function useFaq() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const isOpen = (id) => openId === id;

  return {
    openId,
    toggle,
    isOpen
  };
}