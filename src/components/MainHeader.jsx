import { useAuth } from '../context/AuthContext';

export const MainHeader = () => {
    const { user, logout } = useAuth();

    return (
        <header className="bg-[#131722] border-b border-[#2A2E39] px-3 py-1.5 flex items-center justify-between">
            {/* Left - Logo */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-[#2962FF] rounded flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                            <path d="M3.5 18.5l6-6 4 4L22 6.92l-.59-.59L14 12.5l-4-4-7 7z"/>
                        </svg>
                    </div>
                    <span className="text-white font-bold text-sm">TradeJourney</span>
                </div>

                {/* Navigation */}
                <nav className="flex items-center gap-1">
                    <button className="px-3 py-1.5 text-xs text-white bg-[#2A2E39] rounded">Chart</button>
                    <button className="px-3 py-1.5 text-xs text-[#787B86] hover:text-white hover:bg-[#2A2E39] rounded transition-all">Screener</button>
                    <button className="px-3 py-1.5 text-xs text-[#787B86] hover:text-white hover:bg-[#2A2E39] rounded transition-all">Markets</button>
                </nav>
            </div>

            {/* Right - User */}
            <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 text-xs text-[#787B86] hover:text-white hover:bg-[#2A2E39] rounded transition-all">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                    </svg>
                </button>
                
                <div className="w-px h-5 bg-[#2A2E39]"></div>
                
                <div className="flex items-center gap-2 px-2 py-1">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                        {user?.username?.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-xs text-[#787B86]">{user?.username}</span>
                </div>
                
                <button
                    onClick={logout}
                    className="p-1.5 text-[#787B86] hover:text-white hover:bg-[#2A2E39] rounded transition-all"
                    title="Logout"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                    </svg>
                </button>
            </div>
        </header>
    );
};
