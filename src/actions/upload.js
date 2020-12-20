import axios from 'axios';
import {upload} from '../api';

export const postUpload = input => {
  let formData = new FormData();
  formData.append('file_excel', input.pagurealisasi);

  return axios({
    url: upload,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: formData
  }).then(res => {
    console.log(res);
  })
}