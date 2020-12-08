import axios from 'axios';
import { chart_total, chart_jenisbelanja, chart_kabupaten, chart_kppn } from '../api';
import { formatChartNumber } from '../helpers/utils';

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