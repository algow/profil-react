import React, {Component} from 'react';
import {
  Divider,
  Segment,
  Progress
} from 'semantic-ui-react';
import { HorizontalBar  } from 'react-chartjs-2';
import {randomHexColor} from '../../../helpers/utils';
import {getUserData} from '../../../helpers/user';
import {getChartJenisbelajaPerkppn} from '../../../actions/chart';

class Pagurealisasi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: [],
      data: [],
      colors: []
    }
  }

  componentDidMount() {
    this.setState({colors: randomHexColor(20)});
    
    getChartJenisbelajaPerkppn(getUserData()['kode_kanwil'], this.props.row.kdsatker).then(res => {
      this.setState({ label: res.label, data: res.data });
    });
  }

  render(){
    const persentase = (this.props.row.realisasi / this.props.row.pagu) * 100;

    const data = {
      labels: this.state.label,
      datasets: [
        {
          label: 'REALISASI PER JENIS BELANJA',
          data: this.state.data,
          backgroundColor: this.state.colors,
          borderColor: this.state.colors,
          borderWidth: 1,
        },
      ],
    };

    const options = {
      responsive: false,
      maintainAspectRatio: true ,
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
              callback: function(value, index, values) {
                return value.toLocaleString('en-US');
              }
            },
          },
        ],
      },
    };

    return (
      <Segment>
        <Progress percent={persentase.toFixed(1)} success progress size='big'>
          Realisasi per ...
        </Progress>
        <Divider horizontal>-</Divider>
          <HorizontalBar data={data} width={1000} height={550} options={options} />
      </Segment>
    );
  }
}

export default Pagurealisasi;