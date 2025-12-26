import { Routes, Route, Navigate } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Dashboard } from './pages/Dashboard'
import { ProtectedRoute } from './components/ProtectedRoute'
import { useAuth } from './context/AuthContext'

function App() {
    const { user } = useAuth();
    
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route 
                path="/login" 
                element={user ? <Navigate to="/dashboard" replace /> : <Login />} 
            />
            <Route 
                path="/register" 
                element={user ? <Navigate to="/dashboard" replace /> : <Register />} 
            />
            <Route 
                path="/dashboard" 
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
