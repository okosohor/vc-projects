

interface CustomerUserError {
  code: string,
  field: string[],
  message: string,
}

interface CustomerAccessToken {
  accessToken: string,
  expiresAt: string,
}

export interface LoginResponse {
  customerAccessToken: CustomerAccessToken,
  customerUserErrors: CustomerUserError[]
}

export interface RegisterData {
  acceptsMarketing: boolean,
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  phone?: string
}