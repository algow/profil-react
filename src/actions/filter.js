import axios from 'axios';
import { refsatker, pagurealisasi, persatker, perkabupaten, perkppn } from '../api';

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