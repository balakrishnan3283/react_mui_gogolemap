import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import './App.css';
import Map from './components/Map.js'
class App extends Component {
  render() {
    return (
      <div className="App">
       <AppBar position="static">
            <Toolbar>
                <Typography variant="caption" color="inherit">
                <p >Autocomplete react googlemap
                  </p>
                </Typography>
            </Toolbar>
        </AppBar>
        <Map/>
      </div>
    );
  }
}
export default App;