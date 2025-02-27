export default function HomeSection() {
    return (
        <section id="home" className="welcome-hero">
            <div className="welcome-hero-serch-box">
                <div className="welcome-hero-form">
                    <div className="single-welcome-hero-form">
                        <form>
                            <input type="text" placeholder="Location" />
                        </form>
                    </div>
                    <div className="welcome-hero-serch">
                        <button className="welcome-hero-btn">
                            search  <i data-feather="search"></i>
                        </button>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="welcome-hero-txt">
                    <h2>best places to find and explore all you need for your trip </h2>
                </div>

            </div>

        </section>
    )
}