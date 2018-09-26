//dependencies
import React, { Component } from 'react'
import LocationList from "./components/LocationList";
import ForecastExtended from './components/ForeCastExtended';
import PropTypes from 'prop-types';
//@material components
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './constants/theme';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//React-Flexbox-Grid
import {Grid, Col, Row} from 'react-flexbox-grid';
//Redux
import {setCity} from './actions';
import { connect } from 'react-redux';
//Assets
import './App.css';
import {cities} from "./constants/cities";


class App extends Component {

    constructor(){
        super();
        this.state = {
            city : null,
        }
    }

  handleSelectedLocation = city => {
        this.setState({city});
        this.props.dispatchSetCity(city);
  };

  render() {
    const {city} = this.state;
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
                  <LocationList
                      cities={cities}
                      onSelectedLocation={this.handleSelectedLocation}
                  />
              </Col>
              <Col xs={12} md={6}>
                  <Paper elevation={5}>
                      <div className="details">
                          { city &&
                              <ForecastExtended city={city}/>
                          }
                      </div>
                  </Paper>
              </Col>
          </Row>
      </Grid>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
};

const initMapDispatchToProps = dispatch => ({
    dispatchSetCity: value=>dispatch(setCity(value))
});

export default connect(null, initMapDispatchToProps)(App);

