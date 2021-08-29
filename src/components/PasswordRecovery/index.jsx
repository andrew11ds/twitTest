const PasswordRecovery = () => {
    return (
        <>
            <h2>Password Recovery</h2>

            <form>
                <label htmlFor="namedInput">Email:</label>
                <input id="namedInput" type="text" name="email" />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default PasswordRecovery;