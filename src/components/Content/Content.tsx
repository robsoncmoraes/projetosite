import styles from "./Content.module.css";

type ContentProps = {
  children: any;
};

export default function Content({ children }: ContentProps) {
  return (
    <div className={styles.content}>
      <div className="content">{children} CONTENT</div>
    </div>
  );
}
