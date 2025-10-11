//! API İLE İLGİLİ CONFIGURASYON AYARLARININ YAPILDIĞI DOSYA

import axios from "axios"
import { BASE_URL } from "./urls"
import { API_KEY,token } from "../utils/constants"

const Client=axios.create()
Client.defaults.baseURL=BASE_URL
Client.defaults.headers = {
    Authorization:`Bearer ${token}`,
    accept: "application/json",
    "Content-Type": "application/json",
};


Client.interceptors.request.use(
    function (config) {
    // Do something before request is sent
    // config.params={
    //     api_key:API_KEY,
    //     language: "tr-TR",
    //     page:1
    // }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);





export default Client