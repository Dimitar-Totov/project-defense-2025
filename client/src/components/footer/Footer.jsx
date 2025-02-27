import styles from './footer.module.css'
export default function Footer() {

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.section}>
                        <ul className={styles.ul}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/catalog">Catalog</a></li>
                            <li><a href="/create">Create Destination</a></li>
                            <li><a href="/about">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottom}>
                    © 2025 All rights reserved.
                </div>
            </footer>
        </>
    )
}