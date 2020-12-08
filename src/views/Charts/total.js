import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { randomHexColor } from '../../helpers/utils';
import { getChartTotal } from '../../actions/chart';
import { getUserData } from '../../helpers/user';

class Total extends Component {
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

    getChartTotal(getUserData()['kode_kanwil']).then(res => {
      this.setState({ label: res.label, data: res.data });
    });
  }

  render() {
    const data = {
      labels: this.state.label,
      datasets: [
        {
          label: 'RUPIAH TOTAL REALISASI',
          data: this.state.data,
          backgroundColor: this.state.colors,
          borderColor: this.state.colors,
          borderWidth: 1,
        },
      ],
    }

    // const options = {
    //   scales: {
    //     xAxes: [
    //       {
    //         ticks: {
    //           beginAtZero: true,
    //           callback: function(value, index, values) {
    //             return value.toLocaleString('en-US');
    //           }
    //         },
    //       },
    //     ],
    //   },
    // };

    return(
      <Doughnut  
        data={data} 
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    )
  }
}

export default Total;