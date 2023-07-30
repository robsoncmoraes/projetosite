import Link from "next/link";
import styles from "./Transportadora.module.css";
import { UilPlus } from "@iconscout/react-unicons";
import { UilSearch } from "@iconscout/react-unicons";
import TransportTableNone from "./TransportTableNone";

export default function TransportadoraSearch() {
  return (
    <>
      <div className={styles.top}>
        <h1 className={styles.title}>Transportadoras</h1>
        <a
          className={styles.a}
          href="../../Logistica/Transportadora/TransportadoraNew"
        >
          <button className={styles.btn}>
            <UilPlus />
            Cadastrar Transportadora
          </button>
        </a>
      </div>
      <div className={styles.divBusca}>
        <Link href="../../Logistica/Transportadora/TransportadoraSearch">
          <UilSearch color="#a3a3a5" />
        </Link>
        <input
          type="text"
          className={styles.txtBusca}
          placeholder="Pesquisar por Razão Social ou CNPJ"
        />
      </div>
      <div>
        <TransportTableNone />
      </div>
    </>
  );
}
