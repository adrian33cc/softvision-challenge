import React from "react";

import styles from "../App/App.module.scss";

const CardCandidate = () => {
  return (
    <div className={styles.candidateCard}>
      <h2>Nombre</h2>
      <p>Una descripcions</p>
      <div className={styles.buttonGroup}>
        <button> Anterior</button>
        <button> Siguiente</button>
      </div>
    </div>
  );
};

export default CardCandidate;
