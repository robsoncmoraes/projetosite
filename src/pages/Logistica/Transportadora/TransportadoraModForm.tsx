import styles from "./TransportadoraModForm.module.css";
import { UilTrash } from "@iconscout/react-unicons";
import { UilExclamationCircle } from '@iconscout/react-unicons';
import { UilPlus } from '@iconscout/react-unicons'
import { UilCheck } from '@iconscout/react-unicons'
import ButtonComponent from "./ButtonComponent";
import { useState} from "react";
import Modal from "./Modal";

export default function TransportadoraModForm() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <>
    <h1 className={styles.title}>Cadastrar modalidade de envio</h1>
    <h1 className={styles.subTitle}>Modalidades de envio são os serviços que a transportadora oferece, geralmente possuem prazos de entrega e valores diferentes.</h1>
    <div className={styles.general}>
      <form>
      <table className={styles.table}>
        <thead>
          <tr align="left">
            <th className={styles.theadth}>Modalidade</th>
            <th className={styles.theadth}>Códigos externos (separados por vírgulas) <UilExclamationCircle/></th>
            <th className={styles.theadth}>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className={styles.tbodytd}><input className={styles.inputMod}type="text" value="Nome da Modalidade. Ex:'Sedex'" /></td>
            <td className={styles.tbodytd}>
              <input className={styles.inputCod} type="text" value="Códigos da modalidade (Ex:'correios_sedex, 1234')" />
            </td>
            
            <td className={styles.btnAlign}>
            <ButtonComponent onOpenModal={handleOpenModal} />
      {showModal && <Modal onClose={() => setShowModal(false)} />}
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.btnAlign2}><button className={styles.btnAdd}><UilPlus/>Adicionar modalidade</button></div>
      </form>
      </div>
      <div className={styles.btnEndPage}>
        <button className={styles.btnBack}>Voltar</button> <button className={styles.btnOk}><UilCheck/>Finalizar cadastro</button>
      </div>
    </>
  );
}
