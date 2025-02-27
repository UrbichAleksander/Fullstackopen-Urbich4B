import axios from 'axios'
const baseUrl = 'http://localhost:5000/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
  }  

  const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
  };

const personServices = { getAll, create, update, remove }

export default  personServices 