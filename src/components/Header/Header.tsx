import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import user from "../../../public/images/user.png";
import { UilLayerGroup } from "@iconscout/react-unicons";
import { UilQuestionCircle } from "@iconscout/react-unicons";
import { UilBell } from "@iconscout/react-unicons";
import HelpContent from "./HelpContent";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logoui}>
          <div className={styles.logo}>
            <Image src={logo} alt="logomarca" width={150} heigth={80} />
          </div>
          <div>
            <button className={styles.type}>Homologação</button>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.help}>
            <UilQuestionCircle
              className={styles.helplogo}
              color="#e42c6c"
              width={50}
            />
            <HelpContent />
          </div>

          <div className={styles.stores}>
            <form className={styles.form}>
              <select title="lojas" className={styles.select}>
                <option value="stores">Loja Pátio Shopping Batel</option>
                <option value="stores">Loja 2</option>
                <option value="stores">Loja 3</option>
                <option value="stores">Loja 4</option>
              </select>
            </form>
          </div>

          <div>
            <button className={styles.button}>
              <UilLayerGroup color="#e42c6c" />
            </button>{" "}
            <button className={styles.button}>
              <UilBell color="#e42c6c" />
            </button>
          </div>

          <div className={styles.users}>
            <Image
              className={styles.userlogo}
              src={user}
              alt="logomarca"
              width={40}
              heigth={40}
            />
            <form className={styles.userform}>
              <label className={styles.label}>Nome de usuário</label>
              <select title="" className={styles.userselect}>
                <option value="stores">user@email.com</option>
                <option value="stores">user2@email.com</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
