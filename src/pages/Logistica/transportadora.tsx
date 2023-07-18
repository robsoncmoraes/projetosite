import Link from "next/link";
import styles from "./Transportadora.module.css";
import { UilPlus } from "@iconscout/react-unicons";
import { UilSearch } from "@iconscout/react-unicons";

export default function Transportadora() {
  return (
    <>
      <div className={styles.top}>
        <h1 className={styles.title}>Transportadoras</h1>
        <button className={styles.btn}>
          <UilPlus />
          Cadastrar Transportadora
        </button>
      </div>
      <div className={styles.divBusca}>
        <UilSearch color="#a3a3a5" align="center" />
        <input
          type="text"
          className={styles.txtBusca}
          placeholder="Pesquisar por Razão Social ou CNPJ"
        />
      </div>
    </>
  );
}
