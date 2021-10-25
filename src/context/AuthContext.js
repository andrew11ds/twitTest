import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [user, setUser] = useState({});

    const login = (user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    };

    useEffect(() => {
        const user = localStorage.getItem("user");
        setUser(user);
    }, []);

    const logout = () => {
        setUser({});
        localStorage.removeItem("user");
    };

    const isLoggedIn = () => {
        return user ? !!Object.keys(user).length : false;
    };
    

    return (<AuthContext.Provider value={{ login, logout, isLoggedIn, user }}>
        {props.children}
    </AuthContext.Provider>);
}

export { AuthContext, AuthProvider}