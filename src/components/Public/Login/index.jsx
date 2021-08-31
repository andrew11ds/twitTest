import { Helmet } from "react-helmet";
const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login</title>
                <meta name="description" content="Login section" />
            </Helmet>
            <h2>Login</h2>
            <label htmlFor="userNameInput">User Name:</label>
            <input id="UsernameInput" type="text" name="userName" />
            <label htmlFor="passInput">Password:</label>
            <input id="passInput" type="text" name="password" />
            <input type="submit" value="Submit" />

        </>
    );
}

export default Login;