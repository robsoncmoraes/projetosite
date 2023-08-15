import styles from "./transportTable.module.css";
import { UilPen } from "@iconscout/react-unicons";
import { UilTrash } from "@iconscout/react-unicons";
import Modal from "./Modal";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";


export default function transportTable() {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {setShowModal(true);};

  
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

        <tbody>
          <tr>
            <td className={styles.tbodytd}>13.217.485/0001-11</td>
            <td className={styles.tbodytd}>
              Empresa Brasileira de Correios e Telégrafos
            </td>
            <td className={styles.tbodytd}>Nenhuma modalidade</td>
            <td className={styles.btnAlign}>
              <button className={styles.buttonedit}>
                <UilPen />
              </button>{" "}
              <ButtonComponent onOpenModal={handleOpenModal}/>
              {showModal && <Modal onClose={() => setShowModal(false)} />}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
