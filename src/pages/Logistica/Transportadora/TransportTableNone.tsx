import styles from "./TransportTableNone.module.css";
import Image from "next/image";
import searchnone from "../../../../public/images/searchnone.png";
import { UilPlus } from "@iconscout/react-unicons";

export default function TransportTableNone() {
  return (
    <div className={styles.general}>
      <table className={styles.table}>
        <thead>
          <tr align="left">
            <th className={styles.theadth}>CNPJ</th>
            <th className={styles.theadth}>Razão Social</th>
            <th className={styles.theadth}>Modalidades de Envio</th>
            <th className={styles.theadth}>Ações</th>
          </tr>
        </thead>
      </table>
      <div className={styles.searchnone} align="center">
        <Image src={searchnone} alt="searchnone" width={500} heigth={400} />
      </div>
      <div className={styles.divBtn}>
        <button className={styles.btn}>
          <UilPlus />
          Cadastrar Transportadora
        </button>
      </div>
    </div>
  );
}
