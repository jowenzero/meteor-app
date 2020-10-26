import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    paddingTop: 70,
  }
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div>
      <NavBar location={props.location}/>
      <main className={classes.mainWrap} style={{ minHeight: "100vh", background: "#f7f7f7" }}>
        <Container style={{width: 500, background: "#f7f7f7"}}>
          {props.children}
        </Container>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
