import { useState } from 'react';
import Modal from './Modal';
import { UilTrash } from "@iconscout/react-unicons";
import styles from "./TransportadoraModForm.module.css";

export default function ButtonComponent({ onOpenModal }) {
  return <button onClick={onOpenModal} className={styles.buttonerase}><UilTrash/></button>;
}