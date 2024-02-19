import React, { createContext, useState, useContext, ReactNode } from 'react';
import IUserInterface from '../interfaces/IUserInterface';
import { set } from 'react-hook-form';

interface AuthContextType {
    isLoggedIn: boolean;
    user: IUserInterface | null;
    login: (email: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    user: null,
    login: () => { },
    logout: () => { },
});

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<IUserInterface | null>(null);

    const login = async (email: string, password: string) => {
        try {
            setUser({ email, password });
            setIsLoggedIn(true);
        } catch (error) {
            //Tratar erro de um retorno API de login
            console.log(error);
        }
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);