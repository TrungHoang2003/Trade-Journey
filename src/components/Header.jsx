import { useAuth } from '../context/AuthContext';

export const Header = ({ symbol, setSymbol, timeFrame, setTimeFrame }) => {
    const { user, logout } = useAuth();
    
    const symbols = ['EURUSD', 'GBPUSD', 'USDJPY', 'AUDUSD', 'XAUUSD', 'BTCUSD', 'ETHUSD'];
    const timeFrames = ['M1', 'M5', 'M15', 'M30', 'H1', 'H4', 'D1', 'W1'];

    return (
        <header className="bg-gradient-to-r from-[#1E222D] to-[#1A1E2D] border-b border-[#2A2E39] px-4 py-3 flex-shrink-0 shadow-lg">
            <div className="flex items-center justify-between">
                {/* Left Section - Logo & Symbol */}
                <div className="flex items-center gap-4">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
                            <span className="text-lg">📊</span>
                        </div>
                        <span className="font-bold text-white hidden sm:inline text-lg">TradeJourney</span>
                    </div>

                    {/* Symbol Selector */}
                    <div className="flex items-center gap-3">
                        <select 
                            value={symbol}
                            onChange={(e) => setSymbol(e.target.value)}
                            className="bg-[#2A2E39] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#363A45] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                        >
                            {symbols.map(s => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                        
                        {/* Price (Mock) */}
                        <div className="text-sm hidden md:flex items-center gap-2 bg-[#2A2E39] px-3 py-1.5 rounded-lg">
                            <span className="text-green-400 font-mono font-bold">1.0856</span>
                            <span className="text-green-400 text-xs bg-green-500/20 px-2 py-0.5 rounded">+0.12%</span>
                        </div>
                    </div>
                </div>

                {/* Center Section - Timeframes */}
                <div className="flex items-center gap-1 bg-[#2A2E39] p-1 rounded-lg">
                    {timeFrames.map(tf => (
                        <button
                            key={tf}
                            onClick={() => setTimeFrame(tf)}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                                timeFrame === tf
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'text-gray-400 hover:text-white hover:bg-[#363A45]'
                            }`}
                        >
                            {tf}
                        </button>
                    ))}
                </div>

                {/* Right Section - User & Controls */}
                <div className="flex items-center gap-3">
                    {/* User Info */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-[#2A2E39] rounded-lg shadow-md">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg">
                            {user?.username?.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-sm text-gray-300 hidden sm:inline font-medium">{user?.username}</span>
                    </div>

                    {/* Logout Button */}
                    <button
                        onClick={logout}
                        className="px-3 py-1.5 text-sm text-gray-400 hover:text-white hover:bg-[#2A2E39] rounded transition"
                        title="Đăng xuất"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};
