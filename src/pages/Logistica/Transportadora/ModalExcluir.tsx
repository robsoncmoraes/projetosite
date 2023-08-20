import { useState } from "react";
import styles from "./Modal.module.css";
import { UilExclamationTriangle } from "@iconscout/react-unicons";
import Modal from "react-modal";

export default function ModalExcluir() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal
        className={styles.myModal}
        isOpen={isOpen}
        onRequestClose={closeModal}
      >
        <div
          className={styles.modal}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className={styles.content}>
            <div className={styles.title1}>
              <UilExclamationTriangle size="40" className={styles.iconAlert} />
              Excluir transportadora
            </div>
            <div className={styles.title2}>
              Tem certeza que deseja excluir esta Transportadora? Essa ação não
              pode ser desfeita.
            </div>
            <div className={styles.align}>
              {" "}
              <button
                type="button"
                className={styles.btnCancel}
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </button>
              <button
                type="button"
                className={styles.btnDelete}
                onClick={closeModal}
              >
                Sim, excluir
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
