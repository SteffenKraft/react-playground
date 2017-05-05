import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Layout from './layout'
import About from './routes/about'
import Home from './routes/home'
import Contact from './routes/contact'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#eda821',
    textColor: '#333333'
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact/:id" component={Contact} />
          </Layout>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
