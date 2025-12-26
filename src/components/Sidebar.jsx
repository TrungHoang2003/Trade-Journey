export const Sidebar = ({ isOpen, onToggle }) => {
    if (!isOpen) {
        return (
            <div className="w-12 bg-[#1E222D] border-r border-[#2A2E39] flex flex-col items-center py-4 gap-4">
                <button
                    onClick={onToggle}
                    className="p-2 hover:bg-[#2A2E39] rounded transition text-gray-400 hover:text-white"
                    title="Mở sidebar"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        );
    }

    const tools = [
        { icon: '📊', label: 'Indicators', active: false },
        { icon: '📐', label: 'Drawing Tools', active: false },
        { icon: '⚙️', label: 'Settings', active: false },
        { icon: '🕐', label: 'Watchlist', active: true },
    ];

    const watchlist = [
        { symbol: 'EURUSD', price: '1.0856', change: '+0.12%', positive: true },
        { symbol: 'GBPUSD', price: '1.2734', change: '-0.08%', positive: false },
        { symbol: 'USDJPY', price: '142.58', change: '+0.34%', positive: true },
        { symbol: 'XAUUSD', price: '2078.45', change: '+1.23%', positive: true },
    ];

    return (
        <div className="w-64 bg-gradient-to-b from-[#1E222D] to-[#1A1E2D] border-r border-[#2A2E39] flex flex-col shadow-xl">
            {/* Sidebar Header */}
            <div className="p-4 border-b border-[#2A2E39] flex items-center justify-between bg-[#2A2E39]/30">
                <h3 className="text-sm font-bold text-gray-200">🛠️ Tools</h3>
                <button
                    onClick={onToggle}
                    className="p-1 hover:bg-[#2A2E39] rounded transition text-gray-400 hover:text-white"
                    title="Đóng sidebar"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Tools List */}
            <div className="p-2 border-b border-[#2A2E39]">
                {tools.map((tool, idx) => (
                    <button
                        key={idx}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded text-sm transition ${
                            tool.active
                                ? 'bg-[#2A2E39] text-white'
                                : 'text-gray-400 hover:text-white hover:bg-[#2A2E39]'
                        }`}
                    >
                        <span>{tool.icon}</span>
                        <span>{tool.label}</span>
                    </button>
                ))}
            </div>

            {/* Watchlist */}
            <div className="flex-1 overflow-y-auto p-2">
                <div className="text-xs font-semibold text-gray-500 px-3 py-2">WATCHLIST</div>
                <div className="space-y-1">
                    {watchlist.map((item) => (
                        <div
                            key={item.symbol}
                            className="px-3 py-2 hover:bg-[#2A2E39] rounded cursor-pointer transition"
                        >
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium text-white">{item.symbol}</span>
                                <span className={`text-xs ${item.positive ? 'text-green-500' : 'text-red-500'}`}>
                                    {item.change}
                                </span>
                            </div>
                            <div className="text-xs text-gray-400 font-mono">{item.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
