import React from "react";
import { Provider } from "react-redux";
import store from "./redux";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./services/ApolloClient";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// components
import Pokemon from "./components/Pokemon";
import Pokedex from "./components/Pokedex";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 600,
      marginBottom: theme.spacing(1),
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <div className="App">
          <Container maxWidth="md">
            <Typography variant="h3" align="center" className={classes.title}>
              Catch Them All
            </Typography>
            <Pokedex />
            <Pokemon />
          </Container>
        </div>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
