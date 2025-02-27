import styles from './about.module.css'
import aboutImage from '../../assets/images/about.jpg'
export default function About() {

    return (
        <>
            <section className={styles.section}>
                <div className={styles.us}>
                    <h1>About Us</h1>
                    <p>
                        We are a passionate team dedicated to providing the best travel destinations around the world.
                    </p>
                </div>

                <div className={styles.content}>
                    <img
                        src={aboutImage}
                        alt="About Us"
                        className={styles.image}
                    />
                    <div className={styles.first}>
                        <p>
                            Travel is the movement of people between distant geographical locations. We believe that every journey should be as unique and exciting as the traveler. Whether you're looking to relax on a pristine beach, embark on an adventurous trek through the mountains, or explore the rich culture of a new city, we are here to turn your travel dreams into reality.
                        </p>
                    </div>
                    <div className={styles.second}>
                        <p>
                            With years of experience in the travel industry, our expert team is dedicated to providing personalized travel plans, exclusive packages, and seamless services that cater to your every need. From booking flights and accommodations to planning unforgettable activities and tours, we take care of all the details so you can focus on enjoying your trip.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}