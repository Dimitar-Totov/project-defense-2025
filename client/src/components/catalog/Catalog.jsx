export default function Catalog() {
    const routeChange = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <h1 className="catalog-title">Explore Destinations</h1>
            <div className="catalog-container">
                <div className="catalog-grid">
                    <h1>Paris</h1>
                    <div key='asjdbisahg123' className="catalog-item">
                        <img src="https://149990825.v2.pressablecdn.com/wp-content/uploads/2023/09/Paris1.jpg" alt="Paris" className="catalog-image" />
                    </div>
                    <button className="details-button" onClick={routeChange}>Details</button>
                </div>
                <div className="catalog-grid">
                    <h1>London</h1>
                    <div key='asjdbisahgasd23' className="catalog-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg" alt="London" className="catalog-image" />
                    </div>
                    <button className="details-button" onClick={routeChange}>Details</button>
                </div>
                <div className="catalog-grid">
                    <h1>Rome</h1>
                    <div key='asjdbisafdgasd23' className="catalog-item">
                        <img src="https://www.citalia.com/-/media/bynder/citalia-destinations/italy/cities/rome/rome-2023-colosseum-shutterstock-2120859782-hybris.jpg?rev=8aa72fc2fea643baa7b321f3553089de" alt="Rome" className="catalog-image" />
                    </div>
                    <button className="details-button" onClick={routeChange}>Details</button>
                </div>
                <div className="catalog-grid">
                    <h1>Bali</h1>
                    <div key='asjdbisafdgasd23' className="catalog-item">
                        <img src="https://www.balisurfingcamp.com/wp-content/uploads/2023/07/image-62.jpeg" alt="Bali" className="catalog-image" />
                    </div>
                    <button className="details-button" onClick={routeChange}>Details</button>
                </div>
                <div className="catalog-grid">
                    <h1>Bangkok</h1>
                    <div key='asjdbisafdgasd23' className="catalog-item">
                        <img src="https://static.independent.co.uk/2025/01/03/14/newFile-12.jpg" alt="Bangkok" className="catalog-image" />
                    </div>
                    <button className="details-button" onClick={routeChange}>Details</button>
                </div>
                <div className="catalog-grid">
                    <h1>Dubai</h1>
                    <div key='asjdbisafdgasd23' className="catalog-item">
                        <img src="https://cdnp.flypgs.com/files/Sehirler-long-tail/Dubai/dubai-palmiye-ada.jpg" alt="Dubai" className="catalog-image" />
                    </div>
                    <button className="details-button" onClick={routeChange}>Details</button>
                </div>

            </div>
        </>
    )
}