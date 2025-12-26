import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!username || !email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setLoading(true);
        const result = await register(username, password, email);
        setLoading(false);

        if (result.success) {
            navigate('/');
        } else {
            setError(result.error || 'Registration failed');
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
                    <p className="text-[#787B86] text-sm mt-1">Create your account</p>
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
                                placeholder="Choose a username"
                            />
                        </div>

                        <div>
                            <label className="block text-xs text-[#787B86] mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                                className="w-full px-3 py-2.5 bg-[#131722] border border-[#2A2E39] rounded text-white text-sm placeholder-[#787B86] focus:outline-none focus:border-[#2962FF] transition-colors disabled:opacity-50"
                                placeholder="Enter your email"
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
                                placeholder="Create a password"
                            />
                        </div>

                        <div>
                            <label className="block text-xs text-[#787B86] mb-2">Confirm Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                disabled={loading}
                                className="w-full px-3 py-2.5 bg-[#131722] border border-[#2A2E39] rounded text-white text-sm placeholder-[#787B86] focus:outline-none focus:border-[#2962FF] transition-colors disabled:opacity-50"
                                placeholder="Confirm your password"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2.5 bg-[#2962FF] hover:bg-[#1E53E4] text-white text-sm font-medium rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Creating account...' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="mt-4 pt-4 border-t border-[#2A2E39] text-center">
                        <p className="text-xs text-[#787B86]">
                            Already have an account?{' '}
                            <Link to="/login" className="text-[#2962FF] hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
