import axios from "axios";
import qs from "qs";
import Cookies from 'js-cookie'
import router from '../router'


export default function (method, url, params = {}) {
    let httpConfig = {
        baseURL: process.env.NODE_ENV === "production" ? "/api/v1" : "http://www.laravel.local/api/v1",
        method: method,
        url: url,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + Cookies.get('token')
        },
    }
    if (params){
        params = qs.stringify(params);
        if (method === 'get') {
            httpConfig.url = httpConfig.url + '?' + params
        } else {
            httpConfig.url = url;
            httpConfig.data = params;
        }
    }
    return new Promise((resolve, reject) => {
        axios(httpConfig).then((res) => {
            if (res.data && res.data.code === 1001) {
                router.push('/login');
            }
            return resolve(res.data)
        }).catch((response) => {
            reject(response)
        })
    })
}