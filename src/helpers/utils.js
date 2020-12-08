export const mapRefsatkerToOption = data => {
  let options = [];

  data.forEach( (value) => {
    let parsed = { key: value.kode_satker, value: value.kode_satker, text: value.kode_satker + ' - ' + value.nama_satker };
    options.push(parsed);
  });

  return options;
}

export const randomHexColor = (num) => {
  const letters = '0123456789ABCDEF'.split('');
  let colors = [];

  for(let i = 0; i < num; i++) {
    let color = '#';
    for(let i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    colors.push(color);
  }
    
    return colors;
}

export const formatChartNumber = data => {
  let formated = {
    label: data.label
  };

  formated.data = data.data.map(num => num.toLocaleString('en-US'));

  return formated;
}