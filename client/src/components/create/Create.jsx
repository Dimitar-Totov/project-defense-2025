export default function CreateDestination() {

    return (
        <>
            <div className="create-parent-div">
                <div className="create-container">
                    <form className="create-form">
                        <h2>Create Destination</h2>
                        <div className="create-input">
                            <textarea id="location" name="location" required></textarea>
                            <label htmlFor="location">Location</label>
                        </div>
                        <div className="create-input">
                            <textarea id="country" name="country" required></textarea>
                            <label htmlFor="name">Country</label>
                        </div>
                        <div className="create-input">
                            <textarea id="destination" name="destinationName" required></textarea>
                            <label htmlFor="destinationName">Name</label>
                        </div>
                        <div className="create-input">
                            <textarea id="image" name="image" required></textarea>
                            <label htmlFor="image">Image url</label>
                        </div>
                        <div className="create-input">
                            <textarea id="bestTime" name="bestTime" required></textarea>
                            <label htmlFor="bestTime">Best time to visit</label>
                        </div>
                        <div className="create-input">
                            <textarea id="description" name="description" required></textarea>
                            <label htmlFor="description">Description</label>
                        </div>
                        <button type="submit">Create</button>
                    </form>
                </div>
                <div className="create-div-info">
                    <h2>Popular quotes about travelling:</h2>
                    <p>The world is a book, and those who do not travel read only one page - Saint Augustine.</p>
                    <p>Not all those who wander are lost - J.R.R. Tolkien.</p>
                    <p>To travel is to live - Hans Christian Andersen.</p>
                    <p>The journey not the arrival matters - T.S. Eliot.</p>
                    <p>Take only pictures, leave only footprints - Chief Seattle.</p>
                    <p>Travel far enough, you meet yourself - David Mitchell.</p>
                </div>
            </div>
        </>
    )
}