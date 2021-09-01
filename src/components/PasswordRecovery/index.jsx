import { Helmet } from "react-helmet";

const PasswordRecovery = () => {
    return (
        <>

            <Helmet>
                <title>Password Recovery</title>
                <meta name="description" content="Password recovery section" />
            </Helmet>
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