import Header from "../Header/Header";
import styles from "./Content.module.css";

type ContentProps = {
  children: any;
};

export default function Content({ children }: ContentProps) {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className={styles.content}>
        <div className="content">{children}</div>
      </div>
    </>
  );
}
