import styles from "./TransportadoraModForm.module.css";
import { UilTrash } from "@iconscout/react-unicons";
import { UilExclamationCircle } from "@iconscout/react-unicons";
import { UilPlus } from "@iconscout/react-unicons";
import { UilCheck } from "@iconscout/react-unicons";
import { useRef, useState } from "react";
import ModalExcluir from "./ModalExcluir";

export default function TransportadoraModForm() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <h1 className={styles.title}>Cadastrar modalidade de envio</h1>
      <h1 className={styles.subTitle}>
        Modalidades de envio são os serviços que a transportadora oferece,
        geralmente possuem prazos de entrega e valores diferentes.
      </h1>
      <div className={styles.general}>
        <form>
          <table className={styles.table}>
            <thead>
              <tr align="left">
                <th className={styles.theadth}>Modalidade</th>
                <th className={styles.theadth}>
                  Códigos externos (separados por vírgulas){" "}
                  <UilExclamationCircle />
                </th>
                <th className={styles.theadth}>Ações</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className={styles.tbodytd}>
                  <input
                    className={styles.inputMod}
                    type="text"
                    value="Nome da Modalidade. Ex:'Sedex'"
                  />
                </td>
                <td className={styles.tbodytd}>
                  <input
                    className={styles.inputCod}
                    type="text"
                    value="Códigos da modalidade (Ex:'correios_sedex, 1234')"
                  />
                </td>

                <td className={styles.btnAlign}>
                  <button
                    type="button"
                    onClick={handleOpen}
                    className={styles.buttonerase}
                  >
                    <UilTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.btnAlign2}>
            <button className={styles.btnAdd}>
              <UilPlus />
              Adicionar modalidade
            </button>
          </div>
        </form>
      </div>
      <div className={styles.btnEndPage}>
        <a href="./TransportadoraNew">
          <button className={styles.btnBack}>Voltar</button>{" "}
        </a>
        <button className={styles.btnOk}>
          <UilCheck />
          Finalizar cadastro
        </button>
        <div className={styles.modal}>{open ? <ModalExcluir /> : null}</div>
      </div>
    </>
  );
}
