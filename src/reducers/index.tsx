import { combineReducers } from "redux";
import PokedexState from "./Pokedex";

const rootReducer = {
  PokedexState,
};

const RootState = combineReducers(rootReducer);

export type AppState = ReturnType<typeof RootState>;

export default RootState;
