import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [user, setUser] = useState({});

    const login = (user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    };

    const logout = () => {
        setUser({});
        localStorage.removeItem("user");
    };

    const isLoggedIn = () => {
        return !!user;
    };
    

    return (<AuthContext.Provider value={{ login, logout, isLoggedIn }}>
        {props.children}
    </AuthContext.Provider>);
}

export { AuthContext, AuthProvider}