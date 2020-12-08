import React, { Component } from 'react';
import { HorizontalBar  } from 'react-chartjs-2';
import { randomHexColor } from '../../helpers/utils';
import { getChartKabupaten } from '../../actions/chart';
import { getUserData } from '../../helpers/user';

class Kabupaten extends Component {
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

    getChartKabupaten(getUserData()['kode_kanwil']).then(res => {
      this.setState({ label: res.label, data: res.data });
    });
  }

  render() {
    const data = {
      labels: this.state.label,
      datasets: [
        {
          label: 'RUPIAH REALISASI PER KABUPATEN/KOTA',
          data: this.state.data,
          backgroundColor: this.state.colors,
          borderColor: this.state.colors,
          borderWidth: 1,
        },
      ],
    }

    const options = {
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
      <HorizontalBar  data={data} options={options} />
    )
  }
}

export default Kabupaten;