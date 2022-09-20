import axios from 'axios'
import { saveUserUrl,getUsersUrl } from '../constants'

export const saveUser = async (data) => {
    const token = process.env.REACT_APP_AUTH_TOKEN
    const options = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return await axios.post(saveUserUrl, data, options)
}

export const getAllUsers = async () => {
    const token = process.env.REACT_APP_AUTH_TOKEN
    const options = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
       const resp =  await axios.post(getUsersUrl, options)
       return resp.data;
    
    } catch (error) {
        throw new Error('an error occures')
    }
} 

export const updateUser = () => {

}