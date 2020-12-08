import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Grid } from 'semantic-ui-react';
import {isAuthenticated} from './helpers/user';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Login from './views/Login';
import Upload from './views/Upload';
import MainTables from './views/MainTable/MainTable';
import Charts from './views/Charts/Charts';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sider: {
        visible: false
      }
    }
  }

  toggleSidebar = () => {
    this.setState({sider: {visible: !this.state.sider.visible}});
  }

  render() {
    return(
      <div style={{backgroundColor: '#e5e5e5', height: '100vh' }}>
        <Grid
          textAlign="center"
          style={{ height: '100%', marginTop: '0' }}
          verticalAlign="middle"
        >
          {
            isAuthenticated() ? 
            <Router>
              <main className="content-right" style={{ fontSize: 18 }}>
                <Header handleToggleSidebar={this.toggleSidebar} />
                <Sidebar visible={this.state.sider.visible} />
                <Switch>
                  <Route exact path="/" render={ props => <MainTables {...props} /> } />
                  <Route exact path="/upload" render={ props => <Upload {...props} /> } />
                  <Route exact path="/charts" render={ props => <Charts {...props} /> } />
                </Switch>
              </main>
            </Router> 
            :
            <Grid.Column style={{ maxWidth: 600 }}>
              <Login />
            </Grid.Column>
          }
        </Grid>
      </div>
    )
  }
}

export default App;
