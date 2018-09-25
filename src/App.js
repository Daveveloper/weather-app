//dependencies
import React, { Component } from 'react'
import LocationList from "./components/LocationList";
import ForecastExtended from './components/ForeCastExtended';

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
import {createStore} from 'redux';
import {setCity} from './actions';

//Assets
import './App.css';


const cities = [
    "San Jose,Cr",
    "Paris,Fr",
    "Bratsk, Rus",
    "Alaska, Us",
    "Madrid, Es",
    "Heredia, Cr"
];

const store = createStore(()=>{}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {

    constructor(){
        super();
        this.state = {
            city : null,
        }
    }

  handleSelectedLocation = city => {
        this.setState({city});
        store.dispatch(setCity(city));
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

export default App;
