import axios from 'axios';
import md5 from 'md5';

const publicKey = 'cbd81ecbb13651a21c31a00ead4d6be7';
const privateKey = 'be73bc4b38920d93d6c1af04780fc7f0eded15f0';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;
