import { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Kiểm tra localStorage khi app load
        const savedUser = localStorage.getItem('tradejourney_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        try {
            const response = await authService.login(username, password);
            
            const userData = {
                id: response.user.id,
                username: response.user.username,
                email: response.user.email,
                loginTime: new Date().toISOString()
            };
            
            setUser(userData);
            localStorage.setItem('tradejourney_user', JSON.stringify(userData));
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const register = async (username, password, email) => {
        try {
            const response = await authService.register(username, password, email);
            
            const userData = {
                id: response.user.id,
                username: response.user.username,
                email: response.user.email,
                loginTime: new Date().toISOString()
            };
            
            setUser(userData);
            localStorage.setItem('tradejourney_user', JSON.stringify(userData));
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('tradejourney_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};
