import { BASE_URL } from '@/shared/api'
import { HttpResponse, http } from 'msw'
import { userMock } from './userMock'

const USER_PATH = '/api/users/current-user'
const FULL_URL = `${BASE_URL}${USER_PATH}`

export const userHandlers = [
  http.get(FULL_URL, () => {
    return HttpResponse.json(userMock, { status: 200 })
  })
]
