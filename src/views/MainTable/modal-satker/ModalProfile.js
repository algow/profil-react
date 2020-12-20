import React, { Component } from 'react';
import {
  Icon,
  Modal,
  Tab,
  Segment,
  Header
} from 'semantic-ui-react';
import Umum from './umum';
import Pagurealisasi from './pagurealisasi';

class ModalProfile extends Component {
  constructor(props){
    super(props);

    this.state = {
      editable: true
    }
  }

  handleEdit = () => {
    this.setState({editable: !this.state.editable})
  }

  render() {
    const panes = [
      { menuItem: 'Umum', render: () => <Tab.Pane><Umum onChange={this.handleEdit} editable={this.state.editable}/></Tab.Pane> },
      { menuItem: 'Pagu/Realisasi', render: () => <Tab.Pane><Pagurealisasi row={this.props.row}/></Tab.Pane> },
      { menuItem: 'Anomali', render: () => <Tab.Pane>Pagu Minus, Suspense, Realisasi Minus</Tab.Pane> }
    ];

    return(
      <Modal 
        size='large' 
        open={this.props.open} 
        onClose={() => this.props.onClose(false, '')} 
        centered={false}
      >
        <Modal.Header>
          <Icon name='users' />
          Profil Satker
        </Modal.Header>
        <Modal.Content>
          <Segment>
            <Header as='h4'>
              {
                this.props.open ?
                this.props.row.referensi[0].nama_satker + ' - ' + this.props.row.kode_satker :
                null
              }
            </Header>
          </Segment>
          <Tab panes={panes} />
        </Modal.Content>
        <Modal.Actions>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default ModalProfile;