import { BASE_URL } from '@/shared/api'
import { HttpResponse, http } from 'msw'

const LOGIN_PATH = '/api/auth/sign-in'
const FULL_URL = `${BASE_URL}${LOGIN_PATH}`

export const loginHandlers = [
  http.post(FULL_URL, async () => {
    return HttpResponse.json({ message: 'success' }, { status: 200 })
  })
]
