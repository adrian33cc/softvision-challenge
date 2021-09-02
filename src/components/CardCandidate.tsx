import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

import styles from "../App/App.module.scss";
import {Candidate, steps} from "../types/candidate";

interface Props {
  candidate: Candidate;
  nextStep: (item: Candidate) => void;
}

const CardCandidate: React.FC<Props> = ({candidate, nextStep}) => {
  const actualStep = steps.indexOf(candidate.step);
  const handleNextStep = () => {
    const stepFuture = steps.indexOf(candidate.step) + 1;
    const handleCandidate: Candidate = {
      id: candidate.id,
      step: steps[stepFuture],
      name: candidate.name,
      comments: "Algun comentario",
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
      comments: "Sin Comentario",
    };

    nextStep(handleCandidate);
    // eslint-disable-next-line no-console
    console.log(candidate.step);
    // eslint-disable-next-line no-console
    console.log(stepFuture);
  };

  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  return (
    <motion.div
      animate={"show"}
      className={styles.candidateCard}
      initial="hidden"
      variants={container}
    >
      <h2>{candidate.name}</h2>
      <p>{candidate.comments}</p>
      <div className={styles.buttonGroup}>
        {actualStep !== 0 ? <button onClick={handlePreviewStep}> <FontAwesomeIcon icon={faArrowLeft} /></button> : null}
        {actualStep + 1 !== steps.length ? (
          <button onClick={handleNextStep}>
            <FontAwesomeIcon icon={faArrowRight} />{" "}
          </button>
        ) : null}
      </div>
    </motion.div>
  );
};

export default CardCandidate;
