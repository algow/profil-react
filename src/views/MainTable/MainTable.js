import React, { Component } from 'react';
import {
  Button,
  Header,
  Icon,
  Segment,
  Dropdown
} from 'semantic-ui-react';
import { getRefsatker } from '../../actions/filter';
import { mapRefsatkerToOption } from '../../helpers/utils';
// import Tables from './tables';
import Wrapper from './wrapper';
import ModalProfile from './modal-satker/ModalProfile';
import { getUserData } from '../../helpers/user';

class MainTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      modal: {
        display: false,
        row: {}
      },
      filter: 'persatker',
      filters: [
        {key: 'perorganisasi', value: 'perorganisasi', text: 'Per BA'},
        {key: 'perkewenangan', value: 'perkewenangan', text: 'Per Kewenangan'},
        {key: 'perkabupaten', value: 'perkabupaten', text: 'Per Kabupaten/Kota'},
        {key: 'perkppn', value: 'perkppn', text: 'Per KPPN'},
        {key: 'persatker', value: 'persatker', text: 'Per Satker'},
        {key: 'perfungsi', value: 'perfungsi', text: 'Per Fungsi'},
        {key: 'perprogram', value: 'perprogram', text: 'Per Program'},
        {key: 'perkegiatan', value: 'perkegiatan', text: 'Per Kegiatan'},
        {key: 'peroutput', value: 'peroutput', text: 'Per Output'},
        {key: 'perjenisbelanja', value: 'perjenisbelanja', text: 'Per Jenis Belanja'},
        // {key: 'perakun', value: 'perakun', text: 'Per Akun'},
        {key: 'persumberdana', value: 'persumberdana', text: 'Per Sumber Dana'},
        {key: 'perkatoutput', value: 'perkatoutput', text: 'Per Kategori Output'}
      ],
      subfilter: '',
      subfilters: []
    }
  }

  handleLoading = () => {
    this.setState({loading: !this.state.loading});
  }

  componentDidUpdate() {
    if(this.state.filter === 'perakun') {
      getRefsatker(getUserData()['kode_kanwil']).then(res => {
        if(this.state.subfilters.length === 0){
          this.setState({subfilters: mapRefsatkerToOption(res)});
        }
      })
    }
  }

  showModal = (display, row) => {
    this.setState({
      modal: {
        display,
        row
      }
    })
  }

  render() {
    return(
      <Segment>
        <Header as='h2' attached='top' textAlign='left'>
          <Icon name='table' />
          Tabel Pagu dan Realisasi
        </Header>
        <Segment.Group>
          <Segment>
            <label>Filter: </label>
            <Dropdown placeholder='Pilih filter' selection options={this.state.filters} onChange={ (e, {value}) => {
              e.persist();
              this.setState({loading: true, filter: value})
            } }/>
            {
              (this.state.filter === 'perakun') ? 
              <React.Fragment>
                <label>Kode Satker: </label>
                <Dropdown placeholder='Kode satker' search selection options={this.state.subfilters} onChange={ (e, {value}) => {
                  e.persist();
                  this.setState({loading: true, subfilter: value})
                } }/>
              </React.Fragment> :
              null
            }
            <Button icon labelPosition='left' size='big' color='green' floated='right'>
              <Icon name='file excel outline' />
              Download Excel
            </Button>
          </Segment>
          <Segment>
            <Wrapper 
              loading={this.state.loading} 
              filter={this.state.filter} 
              subfilter={this.state.subfilter} 
              onLoadingChange={this.handleLoading}
              modal={this.showModal}
            />
          </Segment>
          <ModalProfile open={this.state.modal.display} onClose={this.showModal} row={this.state.modal.row}/>
        </Segment.Group>
      </Segment>
    )
  }
}

export default MainTable;
