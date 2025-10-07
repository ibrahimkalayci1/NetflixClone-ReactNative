import Client from  "./instance"

//! Kodun amacı: Axios’u her yerde uzun uzun yazmak yerine tek bir noktadan çağırabilmek.

//!  Yani axios.get(...) yerine sadece getRequest('/users', {id: 1}) yazıyorsun.

//! Bu sayede clean code oluyor ve ileride Client’e interceptor eklersen (mesela token otomatik ekleme), bütün request’lerin bundan faydalanıyor.

export async function getRequest(URL:string, params:object) {
    const response = await Client.get(URL, {params:params});
    return response
}

export async function postRequest(URL:string, payload:object) {
    const response = await Client.post(URL, payload);
    return response
}

export async function patchRequest(URL:string, payload:object) {
    const response = await Client.patch(URL, payload);
    return response
}

export async function putRequest(URL:string, payload:object) {
    const response = await Client.put(URL, payload);
    return response
}

export async function deleteRequest(URL:string, params:object) {
    const response = await Client.delete(URL, {params:params});
    return response
}