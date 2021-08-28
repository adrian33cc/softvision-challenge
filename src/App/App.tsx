import React, {useEffect, useState} from "react";

import CardCandidate from "../components/CardCandidate";
import {Candidate, steps} from "../types/candidate";
import data from "../api/candidates.json";

import styles from "./App.module.scss";

const App = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [inicialStep, setInicialStep] = useState<Candidate[]>([]);
  const [tecnicaStep, setTecnicaStep] = useState<Candidate[]>([]);
  const [ofertaStep, setOfertaStep] = useState<Candidate[]>([]);
  const [asignacionStep, setAsignacionStep] = useState<Candidate[]>([]);
  const [rechazoStep, setRehazoStep] = useState<Candidate[]>([]);

  useEffect(() => {
    if (candidates.length === 0) {
      setCandidates(data);
    }
    setInicialStep(candidates.filter((candidate) => candidate.step === steps[0]));
    setTecnicaStep(candidates.filter((candidate) => candidate.step === steps[1]));
    setOfertaStep(candidates.filter((candidate) => candidate.step === steps[2]));
    setAsignacionStep(candidates.filter((candidate) => candidate.step === steps[3]));
    setRehazoStep(candidates.filter((candidate) => candidate.step === steps[4]));
  }, [candidates]);

  const nextStep = (item: Candidate) => {
    const reloadCandidates = candidates.filter((candidate) => candidate.id !== item.id);

    setCandidates([...reloadCandidates, item]);
    // eslint-disable-next-line no-console
    console.log(candidates);
  };

  return (
    <main className={styles.container}>
      <div className={styles.table}>
        <div className={styles.column}>
          <h1 className={styles.title}>Entrevista Inicial</h1>
          {inicialStep.map((candidate: Candidate) => (
            <CardCandidate key={candidate.id} candidate={candidate} nextStep={nextStep} />
          ))}
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Entrevista Técnica</h1>
          {tecnicaStep.map((candidate: Candidate) => (
            <CardCandidate key={candidate.id} candidate={candidate} nextStep={nextStep} />
          ))}
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Oferta</h1>
          {ofertaStep.map((candidate: Candidate) => (
            <CardCandidate key={candidate.id} candidate={candidate} nextStep={nextStep} />
          ))}
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Asignación</h1>
          {asignacionStep.map((candidate: Candidate) => (
            <CardCandidate key={candidate.id} candidate={candidate} nextStep={nextStep} />
          ))}
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Rechazo </h1>
          {rechazoStep.map((candidate: Candidate) => (
            <CardCandidate key={candidate.id} candidate={candidate} nextStep={nextStep} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
