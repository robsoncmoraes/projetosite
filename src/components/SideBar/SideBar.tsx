import React from "react";
import SubMenu from "./SubMenu";
import styles from "./SideBar.module.css";
import Item from "./Item";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { UilShoppingCart } from "@iconscout/react-unicons";
import { UilTagAlt } from "@iconscout/react-unicons";
import { UilTruck } from "@iconscout/react-unicons";
import { UilBox } from "@iconscout/react-unicons";
import { UilChatBubbleUser } from "@iconscout/react-unicons";
import { UilBuilding } from "@iconscout/react-unicons";
import { UilSetting } from "@iconscout/react-unicons";

export default function Menu() {
  return (
    <div className={styles.logo}>
      <div>
        <Image src={logo} alt="logomarca" width={150} heigth={80} />
      </div>

      <ul className={styles.menu}>
        <div className={styles.link}>
          <UilShoppingCart className={styles.icon} />
          <SubMenu title="Vendas"></SubMenu>
        </div>

        <div className={styles.link}>
          <UilTagAlt className={styles.icon} />
          <SubMenu title="Gerenciar Estoques e Preços"></SubMenu>
        </div>

        <div className={styles.link}>
          <UilTruck className={styles.icon} />
          <SubMenu title="Logística">
            <div className={styles.itemMenu}>
              <Item title="Expedição" path="/Logistica/expedicao" />
              <Item
                title="Transportadoras"
                path="/Logistica/Transportadora/Transportadora"
              />
            </div>
          </SubMenu>
        </div>

        <div className={styles.link}>
          <UilBox className={styles.icon} />
          <SubMenu title="Cadastro de Produtos"></SubMenu>
        </div>

        <div className={styles.link}>
          <UilChatBubbleUser className={styles.icon} />
          <SubMenu title="Clientes"></SubMenu>
        </div>

        <div className={styles.link}>
          <UilBuilding className={styles.icon} />
          <SubMenu title="Fornecedores"></SubMenu>
        </div>

        <div className={styles.link}>
          <UilSetting className={styles.icon} />
          <SubMenu title="Configurações"></SubMenu>
        </div>
      </ul>
    </div>
  );
}
