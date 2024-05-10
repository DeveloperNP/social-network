import { UserType } from '../types/types'
import { instance } from './api.ts'


type GetUsersResponseType = {
  error: string | null
  items: Array<UserType>
  totalCount: number
}


export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  }
}