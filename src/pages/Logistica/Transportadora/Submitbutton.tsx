import styles from "./Submitbutton.module.css";

export default function Submitbutton({ id, text, onClick }) {
  return (
    <div>
      <button id={id} className={styles.btn} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
