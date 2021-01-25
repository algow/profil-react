import React, {Component} from 'react';
import {
  Button,
  Icon,
  Table
} from 'semantic-ui-react';
import { getPersatker } from '../../../actions/filter';
import { getUserData } from '../../../helpers/user';

class Satker extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      content: []
    }
  }

  componentDidMount(){
    getPersatker(getUserData()['kode_kanwil']).then(res => {
      if(this.state.content.length !== res.length){
        this.setState({content: res});
        this.props.onLoadingChange();
      }
    });
  }

  render() {
    return (
      <Table striped celled selectable sortable style={{ fontSize: 14 }} color='black'>
        <Table.Header>
          <Table.Row textAlign='center'>
            <Table.HeaderCell>Nomor</Table.HeaderCell>
            <Table.HeaderCell>Kode KPPN</Table.HeaderCell>
            <Table.HeaderCell>Kode BA</Table.HeaderCell>
            <Table.HeaderCell>Kode Satker</Table.HeaderCell>
            <Table.HeaderCell>Nama Satker</Table.HeaderCell>
            <Table.HeaderCell>DIPA</Table.HeaderCell>
            <Table.HeaderCell>Blokir</Table.HeaderCell>
            <Table.HeaderCell>Realisasi</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            this.state.content.map((value, index) => (
              <Table.Row key={index}>
                <Table.Cell textAlign='center'>{index + 1}</Table.Cell>
                <Table.Cell textAlign='center'>{value.referensi[0].kdkppn}</Table.Cell>
                <Table.Cell textAlign='center'>{value.referensi[0].kddept}</Table.Cell>
                <Table.Cell textAlign='center'>{value.kdsatker}</Table.Cell>
                <Table.Cell>{value.referensi[0].nmsatker}</Table.Cell>
                <Table.Cell textAlign='right'>{value.pagu.toLocaleString('en-US')}</Table.Cell>
                <Table.Cell textAlign='right'>{value.blokir.toLocaleString('en-US')}</Table.Cell>
                <Table.Cell textAlign='right'>{value.realisasi.toLocaleString('en-US')}</Table.Cell>
                <Table.Cell textAlign='right'>
                  <Button icon color='green' size='mini' onClick={() => this.props.modal(true, value)}>
                    <Icon name='expand arrows alternate' />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    );
  }
}

export default Satker;