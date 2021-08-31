import { Helmet } from "react-helmet";
const SignUp = () => {
    return (
        <>

            <Helmet>
                <title>Search</title>
                <meta name="description" content="Sign up section" />
            </Helmet>
            <h2>Sign up</h2>

            <form>
                <label htmlFor="userNameInput">User Name:</label>
                <input id="UsernameInput" type="text" name="userName" />
                <label htmlFor="emailInput">Email:</label>
                <input id="emailInput" type="text" name="email" />
                <label htmlFor="passInput">Password:</label>
                <input id="passInput" type="text" name="password" />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default SignUp;