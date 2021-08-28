export interface Candidate {
  id: string;
  name: string;
  step: string | "Entrevista inicial" | "Entrevista técnica" | "Oferta" | "Asignación" | "Rechazo";
  comments: string;
}

export const steps = [
  "Entrevista inicial",
  "Entrevista técnica",
  "Oferta",
  "Asignación",
  "Rechazo",
];
