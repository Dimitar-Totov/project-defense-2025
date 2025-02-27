import styles from './catalog.module.css'
export default function Catalog() {
    const routeChange = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <h1 className={styles.title}>Explore Destinations</h1>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <h1>Paris</h1>
                    <div key='asjdbisahg123' className={styles.item}>
                        <img src="https://149990825.v2.pressablecdn.com/wp-content/uploads/2023/09/Paris1.jpg" alt="Paris" className={styles.image} />
                    </div>
                    <button className={styles.details} onClick={routeChange}>Details</button>
                </div>
                <div className={styles.grid}>
                    <h1>London</h1>
                    <div key='asjdbisahgasd23' className={styles.item}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg" alt="London" className={styles.image} />
                    </div>
                    <button className={styles.details} onClick={routeChange}>Details</button>
                </div>
                <div className={styles.grid}>
                    <h1>Rome</h1>
                    <div key='asjdbisafdgasd23' className={styles.item}>
                        <img src="https://www.citalia.com/-/media/bynder/citalia-destinations/italy/cities/rome/rome-2023-colosseum-shutterstock-2120859782-hybris.jpg?rev=8aa72fc2fea643baa7b321f3553089de" alt="Rome" className={styles.image} />
                    </div>
                    <button className={styles.details} onClick={routeChange}>Details</button>
                </div>
                <div className={styles.grid}>
                    <h1>Bali</h1>
                    <div key='asjdbisafdgasd23' className={styles.item}>
                        <img src="https://thebalisun.com/wp-content/uploads/2024/10/Balis-Nusa-Dua-Resort-Set-To-Grow-With-Ambitious-Expansion-Plans-Revealed.jpg" alt="Bali" className={styles.image} />
                    </div>
                    <button className={styles.details} onClick={routeChange}>Details</button>
                </div>
                <div className={styles.grid}>
                    <h1>Bangkok</h1>
                    <div key='asjdbisafdgasd23' className={styles.item}>
                        <img src="https://static.independent.co.uk/2025/01/03/14/newFile-12.jpg" alt="Bangkok" className={styles.image} />
                    </div>
                    <button className={styles.details} onClick={routeChange}>Details</button>
                </div>
                <div className={styles.grid}>
                    <h1>Dubai</h1>
                    <div key='asjdbisafdgasd23' className={styles.item}>
                        <img src="https://cdnp.flypgs.com/files/Sehirler-long-tail/Dubai/dubai-palmiye-ada.jpg" alt="Dubai" className={styles.image} />
                    </div>
                    <button className={styles.details} onClick={routeChange}>Details</button>
                </div>

            </div>
        </>
    )
}