import React, { Component } from 'react';
import {
  Menu,
  Button,
  Icon,
  Dropdown
} from 'semantic-ui-react';
import { getUserData, removeUserData } from '../helpers/user';

class Headers extends Component {
  render() {
    const trigger = <span>{getUserData()['nama_kanwil']}</span>;

    return (
      <Menu borderless inverted color="blue" fixed="top" size="large">
        <Menu.Item style={{ width:240, fontSize:17 }}>
          <div style={{ fontWeight: 'bold' }}>
            UNTITLED
          </div>
          <Button
            icon
            color="blue"
            style={{ marginLeft: "50px" }}
            onClick={ this.props.handleToggleSidebar }
          >
            <Icon name="sidebar" />
          </Button>
        </Menu.Item>

        <Menu.Menu position="right">
          <Dropdown
            trigger={trigger}
            icon={null}
            className="link item"
            style={{ height: '100%' }}
          >
            <Dropdown.Menu >
              <Dropdown.Item
                onClick={ () => {
                  removeUserData();
                  window.location.reload();
                }}
              >
                <Icon name='sign-out' />
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Headers;