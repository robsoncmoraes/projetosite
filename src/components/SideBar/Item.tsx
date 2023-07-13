import Link from "next/link";

type ItemProps = {
  title: string;
  path: string;
};

export default function Item({ path, title }: ItemProps) {
  return (
    <>
      <div className="submenu-item">
        <Link href={path}>{title}</Link>
      </div>
    </>
  );
}
