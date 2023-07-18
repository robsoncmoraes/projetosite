import styles from "./Help.module.css";

import React, { useState } from "react";
import Emergency from "./Emergency";
import HelpContent from "./HelpContent";

export default function Help() {
  const [emergency, setEmergency] = useState(true);

  const handleEmergency = () => {
    setEmergency(!emergency);
    console.log(emergency);
  };

  return (
    <>
      {emergency ? (
        <HelpContent handleEmergency={handleEmergency} />
      ) : (
        <Emergency handleEmergency={handleEmergency} />
      )}
    </>
  );
}
