export default function CreateDestination() {

    return (
        <>
            <div className="create-container">
                <form className="create-form">
                    <h2>Create Destination</h2>
                    <div className="register-input">
                        <input type="text" id="name" required />
                        <label for="name">Name</label>
                    </div>
                    <div className="register-input">
                        <textarea id="description" required></textarea>
                        <label for="description">Image</label>
                    </div>
                    <div className="register-input">
                        <textarea id="description" required></textarea>
                        <label for="description">Description</label>
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
        </>
    )
}