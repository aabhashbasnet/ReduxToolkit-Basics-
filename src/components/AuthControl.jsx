import { useDispatch, useSelector } from 'react-redux'
import { logout, login } from '../features/auth/authSlice'
function AuthControl() {
    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector((state) => state.auth)

    const handleLogin = () => {
        const userData = { name: "Ram", email: "test@gmail.com" }
        dispatch(login(userData))
    }
    return (
        <>
            <h1>AuthControl</h1>
            {
                isLoggedIn ? (
                    <>
                        <h2>Welcome : {user.name}</h2>
                        <h2>Email : {user.email}</h2>
                        <button onClick={() => dispatch(logout())}>Logout</button>
                    </>
                ) : (
                    <>
                        <h2>Please Login</h2>
                        <button onClick={(handleLogin)}>Login</button>
                    </>
                )
            }

        </>
    )
}
export default AuthControl