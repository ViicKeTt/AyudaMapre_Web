import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./user/user.state"
import { userDto } from "../../models"
 
export interface AuthenticatorConfigure {
  user: userDto,
  //se puede añadir mas
}
 
const StoreConfigure = configureStore<AuthenticatorConfigure>({
  reducer: {
    user: userSlice.reducer
  }
});

export default StoreConfigure;
