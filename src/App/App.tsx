import React, {useEffect, useState} from "react";

import CardCandidate from "../components/CardCandidate";
import {Candidate} from "../types/candidate";
import data from "../api/candidates.json";

import styles from "./App.module.scss";

const steps: string[] = [
  "Entrevista inicial",
  "Entrevista técnica",
  "Oferta",
  "Asignación",
  "Rechazo",
];

function App() {
  const [candidatesI, setCandidatesI] = useState<Candidate[]>([]);

  return (
    <main className={styles.container}>
      <div className={styles.table}>
        <div className={styles.column}>
          <h1 className={styles.title}>Entrevista Inicial</h1>
          <CardCandidate />
          <CardCandidate />
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Entrevista Técnica</h1>
          <CardCandidate />
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Oferta</h1>
          <CardCandidate />
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Asignación</h1>
          <CardCandidate />
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Entrevista </h1>
          <CardCandidate />
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Rechazo </h1>
          <CardCandidate />
        </div>
      </div>
    </main>
  );
}

export default App;
