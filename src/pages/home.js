import React from "react";
import {
  Grid,
} from "@material-ui/core";
import "../styles/App.css";
import Layout from '../components/Layout'

function Home() {
  return (
    <main>
      <Layout location="HOME">
        <Grid container spacing={2} style={{background: "#fff", minHeight: "92vh"}}>
          <Grid item xs={12}>
            <p className="title-head">Welcome to</p>

            <h1 className="title">
              <a href="https://reactjs.org">React.js</a>
            </h1>

            <p className="description">
              Get started by editing <code>pages/index.js</code> then save and
              publish again
            </p>
          </Grid>
        </Grid>
      </Layout>
    </main>
  );
}

export default Home;
