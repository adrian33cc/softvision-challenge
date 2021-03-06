import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";

import CardCandidate from "../components/CardCandidate";
import {Candidate, steps} from "../types/candidate";
import data from "../api/candidates.json";
import NewCandidate from "../components/NewCandidate";

import styles from "./App.module.scss";

const App = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [inicialStep, setInicialStep] = useState<Candidate[]>([]);
  const [tecnicaStep, setTecnicaStep] = useState<Candidate[]>([]);
  const [ofertaStep, setOfertaStep] = useState<Candidate[]>([]);
  const [asignacionStep, setAsignacionStep] = useState<Candidate[]>([]);
  const [rechazoStep, setRehazoStep] = useState<Candidate[]>([]);

  const [openCandidate, setOpenCandidate] = useState(true);

  const getCandidates = async () => {
    const candidatesStorage: string = localStorage.getItem("candidates") as string;

    if (candidatesStorage) {
      setCandidates(JSON.parse(candidatesStorage));
    } else {
      setCandidates(data);
      //localStorage.setItem("candidates", JSON.stringify(candidates));
    }
  };

  useEffect(() => {
    const candidatesStorage: string = localStorage.getItem("candidates") as string;

    if (candidatesStorage === null) {
      setCandidates(data);
    } else {
      setCandidates(JSON.parse(candidatesStorage));
    }
    console.log(candidates);
  }, []);

  useEffect(() => {
    setInicialStep(candidates.filter((candidate: Candidate) => candidate.step === steps[0]));
    setTecnicaStep(candidates.filter((candidate: Candidate) => candidate.step === steps[1]));
    setOfertaStep(candidates.filter((candidate: Candidate) => candidate.step === steps[2]));
    setAsignacionStep(candidates.filter((candidate: Candidate) => candidate.step === steps[3]));
    setRehazoStep(candidates.filter((candidate: Candidate) => candidate.step === steps[4]));
    localStorage.setItem("candidates", JSON.stringify(candidates));
  }, [candidates]);

  const nextStep = (item: Candidate) => {
    //const reloadCandidates = candidates.filter((candidate) => candidate.id !== item.id);
    const modifyCandidates: Candidate[] = candidates.map<Candidate>((candidate: Candidate) => {
      if (candidate.id === item.id) {
        return {...candidate, step: item.step};
      } else {
        return candidate;
      }
    });

    setCandidates(modifyCandidates);
    //localStorage.setItem("candidates", JSON.stringify(candidates));
  };

  const addCandidate = (item: Candidate) => {
    setCandidates([...candidates, item]);
    //setOpenCandidate(!openCandidate);
    //localStorage.setItem("candidates", JSON.stringify(candidates));
  };

  //localStorage.setItem("candidates", JSON.stringify(candidates));

  // @ts-ignore
  // @ts-ignore
  return (
    <main className={styles.container}>
      <div className={styles.table}>
        <div className={styles.column}>
          <h1 className={styles.title}>Entrevista Inicial</h1>
          <button onClick={() => setOpenCandidate(!openCandidate)}>
            {openCandidate ? <FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faTimes} />}
          </button>
          {!openCandidate ? <NewCandidate addCandidate={addCandidate} /> : null}
          <div className={styles.cardList}>
            {inicialStep.length !== 0 ? (
              inicialStep.map((candidate) => (
                <CardCandidate key={candidate.id} candidate={candidate} nextStep={nextStep} />
              ))
            ) : (
              <h3>No hay candidatos</h3>
            )}
          </div>
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Entrevista T??cnica</h1>
          {tecnicaStep.length !== 0 ? (
            tecnicaStep.map((candidate) => (
              <CardCandidate key={candidate.id} candidate={candidate} nextStep={nextStep} />
            ))
          ) : (
            <h3>No hay candidatos</h3>
          )}
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Oferta</h1>
          {ofertaStep.length !== 0 ? (
            ofertaStep.map((candidate) => (
              <CardCandidate key={candidate.id} candidate={candidate} nextStep={nextStep} />
            ))
          ) : (
            <h3>No hay candidatos</h3>
          )}
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Asignaci??n</h1>
          {asignacionStep.length !== 0 ? (
            asignacionStep.map((candidate) => (
              <CardCandidate key={candidate.id} candidate={candidate} nextStep={nextStep} />
            ))
          ) : (
            <h3>No hay candidatos</h3>
          )}
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Rechazo </h1>
          {rechazoStep.length !== 0 ? (
            rechazoStep.map((candidate) => (
              <CardCandidate key={candidate.id} candidate={candidate} nextStep={nextStep} />
            ))
          ) : (
            <h3>No hay candidatos</h3>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
