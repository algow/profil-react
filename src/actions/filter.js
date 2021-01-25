import axios from 'axios';
import { 
  refsatker, 
  pagurealisasi, 
  persatker, 
  perkabupaten, 
  perkppn,
  perorganisasi,
  perkewenangan,
  perfungsi,
  perprogram,
  perkegiatan,
  peroutput,
  perjenisbelanja,
  persumberdana,
  perkatoutput
} from '../api';

export const getRefsatker = kanwil => {
  return axios({
    url: refsatker + kanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}

export const getPagurealisasi = (kodeKanwil, kodeSatker) => {
  return axios({
    url: pagurealisasi + kodeKanwil + '&kode_satker=' + kodeSatker,
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}

export const getPersatker = kanwil => {
  return axios({
    url: persatker + kanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}

export const getPerkabupaten = kanwil => {
  return axios({
    url: perkabupaten + kanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}

export const getPerkppn = kanwil => {
  return axios({
    url: perkppn + kanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });  
}

export const getPerorganisasi = kanwil => {
  return axios({
    url: perorganisasi + kanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}

export const getPerkewenangan = kanwil => {
  return axios({
    url: perkewenangan + kanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}

export const getPerfungsi = kanwil => {
  return axios({
    url: perfungsi + kanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}

export const getPerprogram = kanwil => {
  return axios({
    url: perprogram + kanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}

export const getPerkegiatan = kanwil => {
  return axios({
    url: perkegiatan + kanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}

export const getPeroutput = kanwil => {
  return axios({
    url: peroutput + kanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}

export const getPerjenisbelanja = kanwil => {
  return axios({
    url: perjenisbelanja + kanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}

export const getPersumberdana = kanwil => {
  return axios({
    url: persumberdana + kanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}

export const getPerkatoutput = kanwil => {
  return axios({
    url: perkatoutput + kanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}