import { useState } from 'react';
import Modal from './Modal';
import styles from "./transportTable.module.css";
import { UilTrash } from "@iconscout/react-unicons";

export default function ButtonComponent({ onOpenModal }) {
  return <button onClick={onOpenModal} className={styles.buttonerase}><UilTrash /></button>;
}