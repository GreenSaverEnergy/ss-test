import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../reducers";
import { QUERY_GET_POKEMON } from "./queries";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { IPokemon } from "../../models/Pokemon";

// actions
import { addPokemon } from "../../actions/Pokemon";

interface OwnProps {}

interface ReduxStateProps {
  myPokedex: IPokemon[];
}

interface ReduxDispatchProps {
  addPokemon: (pokemon: IPokemon) => void;
}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps;

const Pokemon: React.FC<Props> = (props: Props): JSX.Element => {
  // props
  const { myPokedex } = props;

  const renderPokemon = () => {
    return <ListItem></ListItem>;
  };

  return (
    <div>
      <List>{renderPokemon()}</List>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  myPokedex: state.PokedexState.pokemon,
});

export default connect(mapStateToProps, { addPokemon })(Pokemon);
