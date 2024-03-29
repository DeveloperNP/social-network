import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "7b4b632c-cffe-4973-8ac6-d6f06e718410"
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

  login(email, password, rememberMe = false, captcha = null) {
    return instance.post('auth/login', {
      email, password, rememberMe, captcha
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
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => response.data);
  },
  
  saveProfile(profile) {
    return instance.put('profile', profile)
      .then(response => response.data);
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

export const securityAPI = {
  getCaptchaURL() {
    return instance.get(`security/get-captcha-url`)
      .then(response => response.data);
  }
}