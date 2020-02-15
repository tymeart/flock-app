import React, { Fragment } from "react";
import SearchRoot from "./pages/search-root";
import Navbar from "./components/layout/Navbar";
import "./styles/main.scss";

// Root component
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <SearchRoot />
    </Fragment>
  );
};

export default App;
