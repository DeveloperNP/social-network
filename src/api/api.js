import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "1d57a6e4-d30d-4717-9614-de78dd9bfc62"
  }
});

export const usersAPI = {
  getUsers (currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}&term=nick`)
      .then(response => response.data);
  }
}