import styles from './notFound.module.css'

export default function NotFound() {
    return (
      <div className={styles.container}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <a
          href="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white text-lg font-medium shadow-md transition duration-300 hover:bg-blue-700"
        >
          Go Home
        </a>
      </div>
    );
  }