import axios from 'axios';
import { chart_total, chart_jenisbelanja, chart_kabupaten, chart_kppn, chart_jenisbelanja_persatker } from '../api';

export const getChartTotal = kodeKanwil => {
  return axios({
    url: chart_total + kodeKanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}

export const getChartJenisbelanja = kodeKanwil => {
  return axios({
    url: chart_jenisbelanja + kodeKanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}

export const getChartKabupaten = kodeKanwil => {
  return axios({
    url: chart_kabupaten + kodeKanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}

export const getChartKppn = kodeKanwil => {
  return axios({
    url: chart_kppn + kodeKanwil,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  });
}

export const getChartJenisbelajaPerkppn = (kodeKanwil, satker) => {
  return axios({
    url: chart_jenisbelanja_persatker(kodeKanwil, satker),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data;
  })
}