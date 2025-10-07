//! API İLE İLGİLİ CONFIGURASYON AYARLARININ YAPILDIĞI DOSYA

import axios from "axios"
import { BASE_URL } from "./urls"
import { API_KEY } from "../utils/constants"

const Client=axios.create()
Client.defaults.baseURL=BASE_URL
Client.defaults.params={
    api_key:API_KEY,
    language:"tr-TR"
}

Client.defaults.headers.common = {
    accept: "application/json"
}

export default Client