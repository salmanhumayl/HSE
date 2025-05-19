export interface Training {
  id: number;
  name: string;
  duration: number;
  type: string;
  validatityType: string | null;
  frequency: string | null;
  trainingMatrices: any[];
}