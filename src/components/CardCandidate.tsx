import React from "react";

import styles from "../App/App.module.scss";
import {Candidate, steps} from "../types/candidate";

interface Props {
  candidate: Candidate;
  nextStep: (item: Candidate) => void;
}

const CardCandidate: React.FC<Props> = ({candidate, nextStep}) => {
  const handleNextStep = () => {
    const stepFuture = steps.indexOf(candidate.step) + 1;
    const handleCandidate: Candidate = {
      id: candidate.id,
      step: steps[stepFuture],
      name: candidate.name,
      comments: "Miau",
    };

    nextStep(handleCandidate);
    // eslint-disable-next-line no-console
    console.log(candidate.step);
    // eslint-disable-next-line no-console
    console.log(stepFuture);
  };

  const handlePreviewStep = () => {
    const stepFuture = steps.indexOf(candidate.step) - 1;
    const handleCandidate: Candidate = {
      id: candidate.id,
      step: steps[stepFuture],
      name: candidate.name,
      comments: "Miau",
    };

    nextStep(handleCandidate);
    // eslint-disable-next-line no-console
    console.log(candidate.step);
    // eslint-disable-next-line no-console
    console.log(stepFuture);
  };

  return (
    <div className={styles.candidateCard}>
      <h2>{candidate.name}</h2>
      <p>{candidate.comments}</p>
      <div className={styles.buttonGroup}>
        <button onClick={handlePreviewStep}> Preview</button>
        <button onClick={handleNextStep}> Next</button>
      </div>
    </div>
  );
};

export default CardCandidate;
