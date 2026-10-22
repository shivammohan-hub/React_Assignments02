// 7. Create a component that displays "Welcome Back!" if a user is logged in; otherwise, display "Please Login".

export default function LogMessege({IsLoggedIn}) {
    return (
        <div className="">
            {IsLoggedIn ? <h2>Welcome Back !!</h2> : <h2>Please Login</h2>}
        </div>
    )
}