import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "1d57a6e4-d30d-4717-9614-de78dd9bfc62"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  }
}

export const authAPI = {
  checkAuthUser() {
    return instance.get('auth/me')
      .then(response => response.data);
  },

  login(email, password, rememberMe = false) {
    return instance.post('auth/login', {
      email, password, rememberMe
    }).then(response => response.data);
  },

  logout() {
    return instance.delete('auth/login')
      .then(response => response.data);
  }
}

export const profileAPI = {
  getUserProfile(userID) {
    return instance.get(`profile/${userID}`)
      .then(response => response.data);
  },

  getUserStatus(userID) {
    return instance.get(`profile/status/${userID}`)
      .then(response => response.data);
  },

  updateUserStatus(status) {
    return instance.put('profile/status', {
      status: status
    }).then(response => response.data);
  }
}

export const followAPI = {
  followUser(userID) {
    return instance.post(`follow/${userID}`)
      .then(response => response.data);
  },

  unfollowUser(userID) {
    return instance.delete(`follow/${userID}`)
      .then(response => response.data);
  }
}