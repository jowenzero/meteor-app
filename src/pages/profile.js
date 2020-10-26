import React from "react";
import {
  Grid,
} from "@material-ui/core";
import "../styles/App.css";
import Layout from '../components/Layout'
import '../styles/setting.css';

function Home() {
  return (
    <main>
      <Layout location="PROFILE">
        <Grid container xs={12}>
            <div className="setting-pic-bg">
                <p className="setting-edit">Edit</p>
                <div className="setting-pic-frame">
                    <div className="setting-pic">
                        <h1 className="setting-pic-text">RC</h1>
                    </div>
                </div>
            </div>

            <div className="setting-white-bg">
                <h3 className="setting-name">Ray Collins</h3>
                <p className="setting-details">raycollins@gmail.com</p>
                <p className="setting-details pos-1">+68459347394</p>
            </div>
        </Grid>

        <Grid container xs={12}>
            <div className="setting-white-bg">
                <h3 className="setting-button-text">
                    Change Password
                </h3>
            </div>

            <div className="setting-white-bg">
                <h3 className="setting-button-text color-red">
                    Logout
                </h3>
            </div>
        </Grid>
      </Layout>
    </main>
  );
}

export default Home;
