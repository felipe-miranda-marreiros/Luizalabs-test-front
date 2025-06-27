import { BASE_URL } from '@/shared/api'
import { HttpResponse, http } from 'msw'

const SIGN_UP_PATH = '/api/auth/sign-up'
const FULL_URL = `${BASE_URL}${SIGN_UP_PATH}`

export const signUpHandlers = [
  http.post(FULL_URL, () => {
    return HttpResponse.json(null, { status: 200 })
  })
]
