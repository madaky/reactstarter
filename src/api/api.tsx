import axios from 'axios';
import { PathApi } from './path.api';



export const API = {
    get(path:string){
        return axios.get(`${PathApi.BASE_URL}${path}`);
    },
    post(path:string, params:any){
        return axios.post(`${PathApi.BASE_URL}${path}`,params);
    }
}

