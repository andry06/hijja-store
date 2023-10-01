import * as config from '../config';
import axios from "axios";

export const apiGetCategory = async() => {
   
    return await axios.get(`${config.urlAPI}/cat`)
}

export const apiGetProduct = async(page, search) => {
   
    return await axios.get(`${config.urlAPI}/product?page=${page}&sorting=Lates&categories=all&search_name=${search}`)
}
