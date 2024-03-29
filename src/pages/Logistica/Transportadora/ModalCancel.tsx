import { useState } from "react";
import Modal from "react-modal";
import styles from "./Modal.module.css";
import { UilExclamationTriangle } from "@iconscout/react-unicons";

export default function ModalExcluir() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <div
          className={styles.modal}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className={styles.content}>
            <div className={styles.title1}>
              <UilExclamationTriangle size="40" className={styles.iconAlert2} />
              Cancelar Cadastro
            </div>
            <div className={styles.title2}>
              Tem certeza que deseja cancelar o cadastro de Transportadora?
            </div>
            <div className={styles.align}>
              {" "}
              <button className={styles.btnCancel} onClick={closeModal}>
                Cancelar
              </button>
              <button className={styles.btnExcluir} onClick={closeModal}>
                Sim, cancelar
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
