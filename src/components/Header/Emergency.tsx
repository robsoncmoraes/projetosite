import styles from "./Emergency.module.css";

import { UilExternalLinkAlt } from "@iconscout/react-unicons";
import { UilWhatsapp } from "@iconscout/react-unicons";
import { UilAngleLeft } from "@iconscout/react-unicons";
import Help from "./Help";

export default function Emergency({ handleEmergency }) {
  return (
    <>
      <div className={styles.dropdown}>
        <div className={styles.menu}>
          <div className={styles.title1}>Plantão de emergências</div>
          <div className={styles.title2}>
            {" "}
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
          <div className={styles.title3}>
            <button className={styles.btn}>
              <div className={styles.title4}>Horário de Atendimento</div>
              <div className={styles.title5}>Segunda à sexta : 18h às 22h</div>
              <div className={styles.title5}>Sábados: 10h às 22h</div>
              <div className={styles.title5}>
                Domingos e feriados: 10h às 20h
              </div>
            </button>
            <div className={styles.title3}>
              <button className={styles.emergency} onClick={handleEmergency}>
                <UilAngleLeft />
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
