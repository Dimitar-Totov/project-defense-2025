import { useEffect, useRef } from "react"

export default function Register() {

    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    },[])

    return (
        <>
            <div className="register-container">
                <form className="register-form">
                    <h2>Register</h2>
                    <div className="register-input">
                        <input type="text" id="username" ref={inputRef} required />
                            <label htmlFor="username">Username</label>
                    </div>
                    <div className="register-input">
                        <input type="email" id="email" required />
                            <label htmlFor="email">Email</label>
                    </div>
                    <div className="register-input">
                        <input type="password" id="password" required />
                            <label htmlFor="password">Password</label>
                    </div>
                    <div className="register-input">
                        <input type="password" id="confirm-password" required />
                            <label htmlFor="confirm-password">Confirm Password</label>
                    </div>
                    <button type="submit">Sign Up</button>
                    <p className="register-link">Already have an account? <a href="/auth/login">Login</a></p>
                </form>
            </div>
        </>
    )
}