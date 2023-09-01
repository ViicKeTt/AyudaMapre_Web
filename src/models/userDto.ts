import { Roles } from "../auth/types/roles"

export interface userDto {
  guid: string
  name: string
  lastName: string
  lastSession: string
  role: Roles[]
}
