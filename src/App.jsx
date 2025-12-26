import { Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Dashboard } from './pages/Dashboard'
import { ProtectedRoute } from './components/ProtectedRoute'
import { useAuth } from './context/AuthContext'

function App() {
    const { user } = useAuth();
    
    return (
        <Routes>
            <Route 
                path="/login" 
                element={user ? <Navigate to="/" replace /> : <Login />} 
            />
            <Route 
                path="/register" 
                element={user ? <Navigate to="/" replace /> : <Register />} 
            />
            <Route 
                path="/" 
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
