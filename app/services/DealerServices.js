const host ="http://localhost:8091"
import axios from 'axios'

export const retrieveDealersService = () =>{
    return axios.get(host +"/getPeople?name=&pType=Tedarikçi&pageNumber=1&pageSize=10&orderBy=&orderAs=&isDropdown=")
}
export const createDealerService = (dataToSend) =>{
    return axios.post(host+"/createPerson",dataToSend)
}
export const updateDealerService = (dataToSend) =>{
    return axios.post(host+"/updatePerson",dataToSend)
}
