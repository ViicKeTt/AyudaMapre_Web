import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./user/user.state"
import { userDto } from "../../models"
 
export interface AuthenticatorConfigure {
  user: userDto,
  //se puede añadir mas
}
 
// export default configureStore<AuthenticatorConfigure>({
//   reducer: {
//     user: userSlice.reducer
//   }
// })

const store = configureStore<AuthenticatorConfigure>({
  reducer: {
    user: userSlice.reducer
  }
});

export default store;
