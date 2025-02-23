export default function Login() {

    return (
        <>
            <div className="login-container">
                <form className="login-form">
                    <h2>Login</h2>
                    <div className="login-input">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="login-input">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required />
                    </div>
                    <button type="submit">Login</button>
                    <p className="register-link">Don't have an account? <a href="/auth/register">Sign up</a></p>
                </form>
            </div>
        </>
    )
}