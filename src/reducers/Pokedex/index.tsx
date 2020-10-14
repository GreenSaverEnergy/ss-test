import { IPokemon } from "../../models/Pokemon";
import { IAction } from "../../actions/Pokemon";

class PokedexState {
  pokemon: IPokemon[] = [];
}

const initialState = new PokedexState();

const uiReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default uiReducer;
