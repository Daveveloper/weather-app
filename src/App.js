//Dependencies...
import React, { Component } from 'react'
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
//@material components...
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './constants/theme';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//React-Flexbox-Grid...
import {Grid, Col, Row} from 'react-flexbox-grid';
//Assets...
import './App.css';
import {cities} from "./constants/cities";



class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <Grid>
          <Row>
              <AppBar position="sticky">
                  <Toolbar>
                      <Typography variant="title" color="inherit" >
                          Weather App
                      </Typography>
                  </Toolbar>
              </AppBar>
          </Row>
          <Row>
              <Col xs={12} md={6}>
                  <LocationListContainer cities={cities}/>
              </Col>
              <Col xs={12} md={6}>
                  <Paper elevation={5}>
                      <div className="details">
                          <ForecastExtendedContainer/>
                      </div>
                  </Paper>
              </Col>
          </Row>
      </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;

