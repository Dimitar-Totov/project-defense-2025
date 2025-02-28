import styles from './register.module.css'
import { useEffect, useRef } from "react"

export default function Register() {

    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <>
            <div className={styles.container}>
                <form className={styles.form}>
                    <h2>Register</h2>
                    <div className={styles.input}>
                        <input type="text" id="username" name='username' autoComplete='on' ref={inputRef} required />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className={styles.input}>
                        <input type="email" id="email" name='email' autoComplete='on' required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className={styles.input}>
                        <input type="password" id="password" name='password' autoComplete='on' required />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className={styles.input}>
                        <input type="password" id="confirm-password" name='confirmPassword' autoComplete='on' required />
                        <label htmlFor="confirm-password">Confirm Password</label>
                    </div>
                    <button type="submit">Sign Up</button>
                    <p className={styles.link}>Already have an account? <a href="/auth/login">Login</a></p>
                </form>
            </div>
        </>
    )
}