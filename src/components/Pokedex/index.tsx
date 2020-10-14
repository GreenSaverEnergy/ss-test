import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../reducers";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// actions
import { removePokemon } from "../../actions/Pokemon";

interface OwnProps {}

interface ReduxStateProps {}

interface ReduxDispatchProps {}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginBottom: theme.spacing(1),
      padding: theme.spacing(2),
    },
    pokedex: {
      marginBottom: theme.spacing(2),
    },
  })
);

const Pokedex: React.FC<Props> = (props: Props): JSX.Element => {
  // hooks
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.paper}>
      <Typography>Pokedex</Typography>
    </Paper>
  );
};

const mapStateToProps = (state: AppState) => ({});

export default connect(mapStateToProps, { removePokemon })(Pokedex);
