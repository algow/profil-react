import axios from 'axios';
import { user } from '../api';
import { setUserData } from '../helpers/user';

export const getUser = kdkppn => {
  return axios({
    url: user,
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {kdkppn: kdkppn}
  }).then(res => {
    return res.data.user;
  });
}

export const postUser = formData => {
  return axios({
    url: user,
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: formData
  }).then(res => {
    setUserData(res.data[0]);
    window.location.reload();
    return res.data[0];
  });
};