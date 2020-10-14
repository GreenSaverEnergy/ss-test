export interface IPokemon {
  id: string;
  number: string;
  name: string;
  weight: IWeightHeight;
  height: IWeightHeight;
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
}

interface IWeightHeight {
  minimum: string;
  maximum: string;
}
