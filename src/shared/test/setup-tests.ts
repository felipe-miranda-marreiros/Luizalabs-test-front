import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TextEncoder } from 'node:util'

afterAll(() => {
  cleanup()
})

global.TextEncoder = TextEncoder
