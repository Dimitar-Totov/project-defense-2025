import styles from './login.module.css'
import { useEffect, useRef } from "react"

export default function Login() {

    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    },[])

    return (
        <>
            <div className={styles.container}>
                <form className={styles.form}>
                    <h2>Login</h2>
                    <div className={styles.input}>
                        <input type="email" id="email" name="email" ref={inputRef} autoComplete='on' required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className={styles.input}>
                        <input type="password" id="password" name="password" autoComplete='on' required />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type="submit">Login</button>
                    <p className={styles.link}>Don't have an account? <a href="/auth/register">Sign up</a></p>
                </form>
            </div>
        </>
    )
}