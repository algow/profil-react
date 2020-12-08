import React, { Component } from 'react';
import { HorizontalBar  } from 'react-chartjs-2';
import { randomHexColor } from '../../helpers/utils';
import { getChartJenisbelanja } from '../../actions/chart';
import { getUserData } from '../../helpers/user';

class JenisBelanja extends Component {
  constructor(props){
    super(props);

    this.state = {
      label: [],
      data: [],
      colors: []
    }
  }

  componentDidMount() {
    this.setState({colors: randomHexColor(20)});

    getChartJenisbelanja(getUserData()['kode_kanwil']).then(res => {
      this.setState({ label: res.label, data: res.data });
    });
  }

  render() {
    const data = {
      labels: this.state.label,
      datasets: [
        {
          label: 'RUPIAH REALISASI PER JENIS BELANJA',
          data: this.state.data,
          backgroundColor: this.state.colors,
          borderColor: this.state.colors,
          borderWidth: 1,
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
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
    
    return(
      <HorizontalBar data={data} width={550} height={500} options={options} />
    )
  }
}

export default JenisBelanja;