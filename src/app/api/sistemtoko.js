import * as config from '../config';
import axios from "axios";

export const apiGetCategory = async() => {
   
    return await axios.get(`${config.urlAPI}/cat`)
}

export const apiGetProduct = async(page) => {
   
    return await axios.get(`${config.urlAPI}/product?page=${page}&sorting=Lates&categories=all&search_name=none`)
}
