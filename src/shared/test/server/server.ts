import { setupServer } from 'msw/node'
import { productHandlers } from './Product/productHandlers'
import { loginHandlers } from './Login/loginHandlers'
import { signUpHandlers } from './SignUp/signUpHandlers'
import { userHandlers } from './User/userHandlers'
import { wishHandlers } from './Wish/wishHandlers'

export const server = setupServer(
  ...productHandlers,
  ...loginHandlers,
  ...signUpHandlers,
  ...userHandlers,
  ...wishHandlers
)
