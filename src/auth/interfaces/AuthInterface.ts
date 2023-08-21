export interface IAuthState {
  logged: boolean
  user?: tokenSuccesModel | tokenFailedModel | null
  login?: boolean // any
  logOut?: boolean // any
}

export interface UserData {
  id: number
  name: string
}

export interface tokenSuccesModel {
  access_token: string
  expires_in: number
  token_type: string
}
export interface tokenFailedModel {
  error: string
  error_description: string
}
