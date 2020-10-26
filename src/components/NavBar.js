import {
  Grid,
  Container,
  IconButton 
} from "@material-ui/core";
import React  from 'react';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from "react-router-dom";

const NavBar = (props) => {
  const history = useHistory();

  return (
    <div className="container">
      <Grid container justify="center">
        <Container style={{width: 500}}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item style={{ textAlign: 'left' }}>
              <h1 style={{color: "#fff", fontSize: 40, fontStyle: "italic", position: "relative", top: -18}}>{props.location}</h1>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <style jsx>{`
        .container {
          width: 100%;
          height: 70px;
          background-color: rgb(0, 174, 239);
          position: fixed;
          display: flex;
          z-index: 99;
        }
      `}</style>
    </div>
  )
}

export default NavBar
