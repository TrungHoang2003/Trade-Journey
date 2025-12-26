import { useState } from 'react';

export const RightPanel = ({ isOpen, onToggle }) => {
    const [activeTab, setActiveTab] = useState('watchlist');

    const watchlist = [
        { symbol: 'EURUSD', price: '1.0856', change: '+0.12%', positive: true },
        { symbol: 'GBPUSD', price: '1.2734', change: '-0.08%', positive: false },
        { symbol: 'USDJPY', price: '156.37', change: '-0.42%', positive: false },
        { symbol: 'AUDUSD', price: '0.6666', change: '+0.12%', positive: true },
        { symbol: 'XAUUSD', price: '2078.45', change: '+0.91%', positive: true },
    ];

    if (!isOpen) {
        return (
            <div className="w-12 bg-[#131722] border-l border-[#2A2E39] flex flex-col items-center py-2 gap-1">
                <button
                    onClick={onToggle}
                    className="w-9 h-9 flex items-center justify-center text-[#787B86] hover:text-white hover:bg-[#2A2E39] rounded transition-all"
                    title="Watchlist"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                    </svg>
                </button>
                <button className="w-9 h-9 flex items-center justify-center text-[#787B86] hover:text-white hover:bg-[#2A2E39] rounded transition-all" title="Alerts">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                    </svg>
                </button>
                <button className="w-9 h-9 flex items-center justify-center text-[#787B86] hover:text-white hover:bg-[#2A2E39] rounded transition-all" title="Calendar">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                    </svg>
                </button>
            </div>
        );
    }

    return (
        <div className="w-72 bg-[#131722] border-l border-[#2A2E39] flex flex-col">
            {/* Header */}
            <div className="px-4 py-3 border-b border-[#2A2E39] flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => setActiveTab('watchlist')}
                        className={`text-sm font-medium transition-colors ${activeTab === 'watchlist' ? 'text-white' : 'text-[#787B86] hover:text-white'}`}
                    >
                        Watchlist
                    </button>
                </div>
                <div className="flex items-center gap-1">
                    <button className="w-7 h-7 flex items-center justify-center text-[#787B86] hover:text-white hover:bg-[#2A2E39] rounded transition-all">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                        </svg>
                    </button>
                    <button 
                        onClick={onToggle}
                        className="w-7 h-7 flex items-center justify-center text-[#787B86] hover:text-white hover:bg-[#2A2E39] rounded transition-all"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Column Headers */}
            <div className="px-4 py-2 border-b border-[#2A2E39] flex items-center text-[10px] text-[#787B86] uppercase tracking-wider">
                <span className="flex-1">Symbol</span>
                <span className="w-20 text-right">Last</span>
                <span className="w-16 text-right">Chg%</span>
            </div>

            {/* Watchlist Items */}
            <div className="flex-1 overflow-y-auto">
                {watchlist.map((item) => (
                    <div
                        key={item.symbol}
                        className="px-4 py-2.5 hover:bg-[#1E222D] cursor-pointer transition-colors border-b border-[#2A2E39]/50"
                    >
                        <div className="flex items-center">
                            <div className="flex-1">
                                <span className="text-sm font-medium text-white">{item.symbol}</span>
                            </div>
                            <div className="w-20 text-right">
                                <span className={`text-sm font-mono ${item.positive ? 'text-[#26a69a]' : 'text-[#ef5350]'}`}>
                                    {item.price}
                                </span>
                            </div>
                            <div className="w-16 text-right">
                                <span className={`text-xs ${item.positive ? 'text-[#26a69a]' : 'text-[#ef5350]'}`}>
                                    {item.change}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
