import { useState } from "react";

type SubmenuProps = {
  children: JSX.Element;
  title: string;
};

export function Submenu({ children, title }: SubmenuProps) {
  const [isExpanded, setExpanded] = useState(true);
  function handleSubmenuClick() {
    if (isExpanded === true) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  }

  return (
    <div>
      <div onClick={handleSubmenuClick}>{title}</div>
      {isExpanded && <div>{children}</div>}
    </div>
  );
}
export default Submenu;
