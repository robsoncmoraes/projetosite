import styles from "./TransportTableNone.module.css";
import { UilPen } from "@iconscout/react-unicons";
import { UilTrash } from "@iconscout/react-unicons";
import Image from "next/image";
import searchnone from "../../../public/images/searchnone.png";

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

        <div className={styles.searchnone} align="center">
          <Image src={searchnone} alt="searchnone" width={400} heigth={300} />
        </div>
      </table>
    </div>
  );
}
