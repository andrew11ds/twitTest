import { post } from "./http";

const loginUser = async (username, password) => {
    const user = {
        username,
        password
    };
    const json = await post("users/login", user);
    return json;
}

const signUpUser = async (username, password, passwordConfirmation, name, email) => {
    const user = {
        username,
        password,
        passwordConfirmation,
        name,
        email
    };
    const json = await post("users", user);
    return json;
}

export { loginUser, signUpUser }