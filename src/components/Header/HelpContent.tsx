import styles from "./Help.module.css";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";
import { UilEnvelope } from "@iconscout/react-unicons";
import { UilCopy } from "@iconscout/react-unicons";
import { UilWhatsapp } from "@iconscout/react-unicons";
import { UilExclamationTriangle } from "@iconscout/react-unicons";
import { UilAngleRight } from "@iconscout/react-unicons";
import React, { useState } from "react";
import Emergency from "./Emergency";

export default function HelpContent() {
  const [open, setOpen] = React.useState(false);
  const [emergency, setEmergency] = React.useState(true);

  const handleEmergency = () => setEmergency(!emergency);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.dropdown}>
        <button onClick={handleOpen} className={styles.helpbtn}>
          Precisa de ajuda?
        </button>
        {emergency ? (
          <div>
            {open ? (
              <div className={styles.menu}>
                <div className={styles.title1}>Precisa de Ajuda?</div>
                <div className={styles.title2}>
                  Tire duas dúvidas na central de conhecimento{" "}
                  <UilExternalLinkAlt
                    className={styles.iconright}
                    color="#589dca"
                    width="15px"
                  />
                </div>
                <div className={styles.title1}>
                  Ou entre em contato com o suporte
                </div>
                <div className={styles.title2}>
                  <UilEnvelope
                    className={styles.icon}
                    color="#c5c5c7"
                    width="15px"
                  />{" "}
                  suporte@nexaas.com{" "}
                  <UilCopy
                    className={styles.iconright}
                    color="#589dca"
                    width="15px"
                  />
                </div>
                <div className={styles.title2}>
                  <UilWhatsapp
                    className={styles.icon}
                    color="#c5c5c7"
                    width="15px"
                  />{" "}
                  (11) 94219 - 0487{" "}
                  <UilExternalLinkAlt
                    className={styles.iconright}
                    color="#589dca"
                    width="15px"
                  />
                </div>
                <button className={styles.btn}>
                  <div className={styles.title4}>Horário de Atendimento</div>{" "}
                  <div className={styles.title5}>
                    Segunda à Sexta: 9h às 18h
                  </div>
                </button>
                <div className={styles.title3}>
                  <button
                    className={styles.emergency}
                    onClick={handleEmergency}
                  >
                    <UilExclamationTriangle
                      className={styles.icon}
                      width="15px"
                    />{" "}
                    Contato para emergências{" "}
                    <UilAngleRight className={styles.iconright} width="15px" />{" "}
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <Emergency handleEmergency={handleEmergency} />
        )}
      </div>
    </>
  );
}
