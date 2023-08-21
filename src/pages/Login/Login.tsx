import { useDispatch } from "react-redux" 
import { createUser, resetUser } from "../../redux/states/user/user.state"
import { GetMorty } from "../../auth/services"
import { ButtonPrimaryComponent } from "../../components/Buttons/ButtonsComponent"

 const Login = () => {
    const dispatch = useDispatch()
    const callApiFecth = async () => {
        try {
            const result = await GetMorty()
            dispatch(createUser(result))
        } catch (error) {
            dispatch(resetUser)
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <ButtonPrimaryComponent title="LOGIN" onClick={callApiFecth}/>
        </div>
    )
}

export default Login