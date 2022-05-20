import axios from 'axios'

export const getProducts = async(queryData) =>{
  return await axios({
    method: 'GET',
    url: `http://localhost:4000/api/search?query=${queryData}`,
    responseType: 'json'
  })
}

