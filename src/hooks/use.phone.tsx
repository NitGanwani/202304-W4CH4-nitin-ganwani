import { useState } from "react";

export function usePhone() {
  const [isCalling, setIsCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCall = () => {
    setIsCalling(true);
    handleChange();
  };

  const handleChange = () => {
    if (isCalling !== true) {
      return "off";
    }
    return "message";
  };

  const handleHang = () => {
    setIsCalling(true);
    setPhoneNumber("");
    handleChange();
  };

  return {
    isCalling,
    phoneNumber,
    handleCall,
    handleHang,
    handleChange,
  };
}
