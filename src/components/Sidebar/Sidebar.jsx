import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <div className={styles.profile}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/115492445?v=4"
            alt="Foto do perfil"
          />

          <strong>Talles Guerra</strong>
          <span>FrontEnd Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
