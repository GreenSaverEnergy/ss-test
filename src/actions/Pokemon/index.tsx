export interface IAction {
  type: string;
  payload?: any;
}

export const addPokemon = () => (dispatch: (action: IAction) => void) => {};

export const removePokemon = () => (dispatch: (action: IAction) => void) => {};
