import { Tab } from "@headlessui/react";
import Link from "next/link";
import styles from "./TransportadoraNew.module.css";
import { NumberCircleOne, NumberCircleTwo } from "@phosphor-icons/react";
import { UilAngleRight } from "@iconscout/react-unicons";

export default function TransportadoraNew() {
  return (
    <>
      <div className={styles.divLink}>
        <Link
          className={styles.link}
          href="../../Logistica/Transportadora/Transportadora"
        >
          Transportadoras
        </Link>
        <UilAngleRight className={styles.UilAngleRight} size={30} />
        <Link
          className={styles.link}
          href="../../Logistica/Transportadora/Transportadora/TransportadoraNew"
        >
          {" "}
          Cadastrar
        </Link>
      </div>
      <div>
        <h1 className={styles.title}>Cadastrar transportadora</h1>
      </div>
      <Tab.Group>
        <Tab.List className={styles.list}>
          <Tab className={styles.tab}>
            <NumberCircleOne size={32} weight="fill" />
            Dados da transportadora
          </Tab>
          <Tab className={styles.tab}>
            <NumberCircleTwo size={32} weight="fill" />
            Modalidade de envio
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Cadastrar trasportadora</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
