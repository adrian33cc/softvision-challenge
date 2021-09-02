import React, {useState} from "react";
import styles from "../App/App.module.scss";
import {Candidate} from "../types/candidate";

interface Props {
  addCandidate: (item: Candidate) => void;
}

const NewCandidate: React.FC<Props> = ({addCandidate}) => {
  const newCandidate: Candidate = {
    id: "9",
    step: "Entrevista inicial",
    name: "",
    comments: "",
  };
  const [datosCandidate, setDatosCandidate] = useState<Candidate>(newCandidate);
  const {name, comments} = datosCandidate;

  // @ts-ignore
  const readNewCandidate = (e: any) => {
    setDatosCandidate({...datosCandidate, [e.target.name]: e.target.value});
  };

  return (
    <div className={styles.newCandidate}>
      <h1>Agrega un Candidato</h1>
      <input name={"name"} placeholder={"Nombre"} value={name} onChange={readNewCandidate} />
      <input name={"comments"} placeholder={"Comentario"} value={comments} onChange={readNewCandidate} />
      <button onClick={() => addCandidate(datosCandidate)}>Agregar</button>
    </div>
  );
};

export default NewCandidate;
