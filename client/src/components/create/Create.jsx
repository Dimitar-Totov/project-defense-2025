export default function CreateDestination() {

    return (
        <>
            <div className="create-parent-div">
                <div className="create-div-info">
                    <h2>Enjoy your travelling:</h2>

                    <p>Traveling around the world opens your eyes to new cultures, allowing you to experience life through a different lens.Exploring new countries offers the chance to taste diverse cuisines, each with its own unique flavor and history.You gain a deeper appreciation for the planet’s beauty, from stunning natural landscapes to vibrant cityscapes.</p>
                </div>
                <div className="create-container">
                    <form className="create-form">
                        <h2>Create Destination</h2>
                        <div className="register-input">
                            <input type="text" id="name" name="country" required />
                            <label for="name">Country</label>
                        </div>
                        <div className="register-input">
                            <textarea id="destination" name="destinationName" required></textarea>
                            <label for="destinationName">Destination name</label>
                        </div>
                        <div className="register-input">
                            <textarea id="image" name="image" required></textarea>
                            <label for="image">Image url</label>
                        </div>
                        <div className="register-input">
                            <textarea id="description" name="description" required></textarea>
                            <label for="description">Description</label>
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