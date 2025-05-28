import { Training } from "./Training";

export interface TrainingMatrix {
  matrixId: number;
  trainingId: number;
  jobCode: string;
  familyName:string;
  jobTitle: string;
  isMandatory: boolean;
  training: Training;
}