import React, {Component} from 'react';
import {
  Button,
  Icon,
  Table
} from 'semantic-ui-react';
import { getPersatker, getPagurealisasi, getPerkabupaten, getPerkppn } from '../../actions/filter';
import { getUserData } from '../../helpers/user';

class Tables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      content: []
    }
  }

  componentDidMount(){
    getPersatker(getUserData()['kode_kanwil']).then(res => {
      this.setState({content: res})
    });
  }

  componentDidUpdate(){
    switch (this.props.filter) {
      case 'perakun':
        if(this.props.subfilter){
          getPagurealisasi(getUserData()['kode_kanwil'], this.props.subfilter,).then(res => {
            if(this.state.content.length !== res.length){
              this.setState({content: res});
              this.props.onLoadingChange();
            }
          });
        }
        break;

      case 'perkabupaten':
        getPerkabupaten(getUserData()['kode_kanwil']).then(res => {
          if(this.state.content.length !== res.length){
            this.setState({content: res});
            this.props.onLoadingChange();
          }
        });
        break;

      case 'perkppn':
        getPerkppn(getUserData()['kode_kanwil']).then(res => {
          if(this.state.content.length !== res.length){
            this.setState({content: res});
            this.props.onLoadingChange();
          }
        });
        break;

      default:
        getPersatker(getUserData()['kode_kanwil']).then(res => {
          if(this.state.content.length !== res.length){
            this.setState({content: res});
            this.props.onLoadingChange();
          }
        });
        break;
    }  
  }

  render() {
    let table = null;

    if(!this.props.loading){
      if(this.props.filter === 'persatker'){
        table = (
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
                <Table.HeaderCell>Outstanding Kontrak</Table.HeaderCell>
                <Table.HeaderCell>Realisasi</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                this.state.content.map((value, index) => (
                  <Table.Row key={index}>
                    <Table.Cell textAlign='center'>{index + 1}</Table.Cell>
                    <Table.Cell textAlign='center'>{value.referensi[0].kode_kppn}</Table.Cell>
                    <Table.Cell textAlign='center'>{value.referensi[0].kode_ba}</Table.Cell>
                    <Table.Cell textAlign='center'>{value.kode_satker}</Table.Cell>
                    <Table.Cell>{value.referensi[0].nama_satker}</Table.Cell>
                    <Table.Cell textAlign='right'>{value.dipa.toLocaleString('en-US')}</Table.Cell>
                    <Table.Cell textAlign='right'>{value.blokir.toLocaleString('en-US')}</Table.Cell>
                    <Table.Cell textAlign='right'>{value.outs_kontrak.toLocaleString('en-US')}</Table.Cell>
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
        )
      }
  
      if(this.props.filter === 'perakun' && this.props.subfilter){
        table = (
          <Table striped celled selectable sortable style={{ fontSize: 14 }} color='black'>
            <Table.Header>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>Nomor</Table.HeaderCell>
                <Table.HeaderCell>Kode Satker</Table.HeaderCell>
                <Table.HeaderCell>Nama Satker</Table.HeaderCell>
                <Table.HeaderCell>AKUN</Table.HeaderCell>
                <Table.HeaderCell>DIPA</Table.HeaderCell>
                <Table.HeaderCell>Blokir</Table.HeaderCell>
                <Table.HeaderCell>Outstanding Kontrak</Table.HeaderCell>
                <Table.HeaderCell>Realisasi</Table.HeaderCell>
                <Table.HeaderCell>Persentase</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                this.state.content.map((value, index) => (
                  <Table.Row key={index}>
                    <Table.Cell textAlign='center'>{index + 1}</Table.Cell>
                    <Table.Cell textAlign='center'>{value.kode_satker}</Table.Cell>
                    <Table.Cell>{value.nama_satker}</Table.Cell>
                    <Table.Cell textAlign='right'>{value.akun}</Table.Cell>
                    <Table.Cell textAlign='right'>{value.dipa.toLocaleString('en-US')}</Table.Cell>
                    <Table.Cell textAlign='right'>{value.blokir.toLocaleString('en-US')}</Table.Cell>
                    <Table.Cell textAlign='right'>{value.outs_kontrak.toLocaleString('en-US')}</Table.Cell>
                    <Table.Cell textAlign='right'>{value.realisasi.toLocaleString('en-US')}</Table.Cell>
                    <Table.Cell textAlign='right'>{(value.persentase * 100).toFixed(2)}</Table.Cell>
                  </Table.Row>
                ))
              }
            </Table.Body>
          </Table>
        )
      }
  
      if(this.props.filter === 'perkppn'){
        table = (
          <Table striped celled selectable sortable style={{ fontSize: 14 }} color='black'>
            <Table.Header>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>Nomor</Table.HeaderCell>
                <Table.HeaderCell>Kode KPPN</Table.HeaderCell>
                <Table.HeaderCell>Nama KPPN</Table.HeaderCell>
                <Table.HeaderCell>DIPA</Table.HeaderCell>
                <Table.HeaderCell>Blokir</Table.HeaderCell>
                <Table.HeaderCell>Outstanding Kontrak</Table.HeaderCell>
                <Table.HeaderCell>Realisasi</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                this.state.content.map((value, index) => (
                  <Table.Row key={index}>
                    <Table.Cell textAlign='center'>{index + 1}</Table.Cell>
                    <Table.Cell textAlign='center'>{value.kode_kppn}</Table.Cell>
                    <Table.Cell>{value.referensi[0].kppn}</Table.Cell>
                    <Table.Cell textAlign='right'>{value.dipa.toLocaleString('en-US')}</Table.Cell>
                    <Table.Cell textAlign='right'>{value.blokir.toLocaleString('en-US')}</Table.Cell>
                    <Table.Cell textAlign='right'>{value.outs_kontrak.toLocaleString('en-US')}</Table.Cell>
                    <Table.Cell textAlign='right'>{value.realisasi.toLocaleString('en-US')}</Table.Cell>
                  </Table.Row>
                ))
              }
            </Table.Body>
          </Table>
        )
      }
  
      if(this.props.filter === 'perkabupaten'){
        table = (
          <Table striped celled selectable sortable style={{ fontSize: 14 }} color='black'>
            <Table.Header>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>Nomor</Table.HeaderCell>
                <Table.HeaderCell>Kode KPPN</Table.HeaderCell>
                <Table.HeaderCell>Kode Kabupaten</Table.HeaderCell>
                <Table.HeaderCell>Nama Kabupaten</Table.HeaderCell>
                <Table.HeaderCell>DIPA</Table.HeaderCell>
                <Table.HeaderCell>Blokir</Table.HeaderCell>
                <Table.HeaderCell>Outstanding Kontrak</Table.HeaderCell>
                <Table.HeaderCell>Realisasi</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                this.state.content.map((value, index) => (
                  <Table.Row key={index}>
                    <Table.Cell textAlign='center'>{index + 1}</Table.Cell>
                    <Table.Cell textAlign='center'>{value.referensi[0].kode_kppn}</Table.Cell>
                    <Table.Cell textAlign='center'>{value.kode_kabupaten}</Table.Cell>
                    <Table.Cell>{value.referensi[0].kabupaten}</Table.Cell>
                    <Table.Cell textAlign='right'>{value.dipa.toLocaleString('en-US')}</Table.Cell>
                    <Table.Cell textAlign='right'>{value.blokir.toLocaleString('en-US')}</Table.Cell>
                    <Table.Cell textAlign='right'>{value.outs_kontrak.toLocaleString('en-US')}</Table.Cell>
                    <Table.Cell textAlign='right'>{value.realisasi.toLocaleString('en-US')}</Table.Cell>
                  </Table.Row>
                ))
              }
            </Table.Body>
          </Table>
        )
      }  
    }

    return table;
  }
}

export default Tables;