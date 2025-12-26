import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!username || !password) {
            setError('Please enter username and password');
            return;
        }

        setLoading(true);
        const result = await login(username, password);
        setLoading(false);

        if (result.success) {
            navigate('/dashboard');
        } else {
            setError(result.error || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen bg-[#131722] flex items-center justify-center p-4">
            <div className="w-full max-w-sm">
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2962FF] rounded-lg mb-4">
                        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                            <path d="M3.5 18.5l6-6 4 4L22 6.92l-.59-.59L14 12.5l-4-4-7 7z"/>
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-white">TradeJourney</h1>
                    <p className="text-[#787B86] text-sm mt-1">Sign in to continue</p>
                </div>

                {/* Form */}
                <div className="bg-[#1E222D] rounded-lg border border-[#2A2E39] p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="bg-[#ef5350]/10 border border-[#ef5350]/30 rounded px-3 py-2 text-[#ef5350] text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-xs text-[#787B86] mb-2">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                disabled={loading}
                                className="w-full px-3 py-2.5 bg-[#131722] border border-[#2A2E39] rounded text-white text-sm placeholder-[#787B86] focus:outline-none focus:border-[#2962FF] transition-colors disabled:opacity-50"
                                placeholder="Enter username"
                            />
                        </div>

                        <div>
                            <label className="block text-xs text-[#787B86] mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                                className="w-full px-3 py-2.5 bg-[#131722] border border-[#2A2E39] rounded text-white text-sm placeholder-[#787B86] focus:outline-none focus:border-[#2962FF] transition-colors disabled:opacity-50"
                                placeholder="Enter password"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2.5 bg-[#2962FF] hover:bg-[#1E53E4] text-white text-sm font-medium rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="mt-4 pt-4 border-t border-[#2A2E39] text-center">
                        <p className="text-xs text-[#787B86]">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-[#2962FF] hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
