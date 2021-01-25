import React, {Component} from 'react';
import {
  Table
} from 'semantic-ui-react';
import { getPerkatoutput } from '../../../actions/filter';
import { getUserData } from '../../../helpers/user';

class KatOutput extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      content: []
    }
  }

  componentDidMount(){
    getPerkatoutput(getUserData()['kode_kanwil']).then(res => {
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
            <Table.HeaderCell>Kode Kategori Output</Table.HeaderCell>
            <Table.HeaderCell>Nama Kategori Output</Table.HeaderCell>
            <Table.HeaderCell>DIPA</Table.HeaderCell>
            <Table.HeaderCell>Blokir</Table.HeaderCell>
            <Table.HeaderCell>Realisasi</Table.HeaderCell>
            <Table.HeaderCell>Persentase</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            this.state.content.map((value, index) => (
              <Table.Row key={index}>
                <Table.Cell textAlign='center'>{index + 1}</Table.Cell>
                <Table.Cell textAlign='center'>{value.kat_out}</Table.Cell>
                <Table.Cell>{value.referensi[0].uraian_kat_out}</Table.Cell>
                <Table.Cell textAlign='right'>{value.pagu.toLocaleString('en-US')}</Table.Cell>
                <Table.Cell textAlign='right'>{value.blokir.toLocaleString('en-US')}</Table.Cell>
                <Table.Cell textAlign='right'>{value.realisasi.toLocaleString('en-US')}</Table.Cell>
                <Table.Cell textAlign='right'>{value.persentase}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    );
  }
}

export default KatOutput;