export const TopToolbar = ({ symbol, setSymbol, timeFrame, setTimeFrame, lastCandle }) => {
    const symbols = ['EURUSD', 'GBPUSD', 'USDJPY', 'AUDUSD', 'XAUUSD', 'BTCUSD', 'ETHUSD'];
    
    // Mapping hiển thị -> giá trị API
    const timeFrameOptions = [
        { label: 'M1', value: 'M1' },
        { label: 'M5', value: 'M5' },
        { label: 'M15', value: 'M15' },
        { label: 'M30', value: 'M30' },
        { label: '1H', value: 'H1' },
        { label: '4H', value: 'H4' },
        { label: 'D', value: 'D1' },
    ];

    return (
        <div className="bg-[#131722] border-b border-[#2A2E39] px-4 py-2.5 flex items-center gap-4">
            {/* Symbol Selector */}
            <div className="flex items-center">
                <select 
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                    className="bg-[#1E222D] text-white text-base font-bold hover:bg-[#2A2E39] px-3 py-2 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2962FF] transition-all"
                >
                    {symbols.map(s => (
                        <option key={s} value={s} className="bg-[#1E222D]">{s}</option>
                    ))}
                </select>
            </div>

            <div className="w-px h-8 bg-[#2A2E39]"></div>

            {/* Timeframes */}
            <div className="flex items-center gap-1">
                {timeFrameOptions.map(tf => (
                    <button
                        key={tf.value}
                        onClick={() => setTimeFrame(tf.value)}
                        className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                            timeFrame === tf.value
                                ? 'bg-[#2962FF] text-white shadow-lg shadow-[#2962FF]/30'
                                : 'text-[#787B86] hover:text-white hover:bg-[#2A2E39]'
                        }`}
                    >
                        {tf.label}
                    </button>
                ))}
            </div>

            <div className="w-px h-8 bg-[#2A2E39]"></div>

            {/* Indicators */}
            <button className="flex items-center gap-2 px-3 py-2 text-[#787B86] hover:text-white hover:bg-[#2A2E39] rounded-lg transition-all text-sm font-medium">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M3.5 18.5l6-6 4 4L22 6.92l-.59-.59L14 12.5l-4-4-7 7z"/>
                </svg>
                Indicators
            </button>

            <button className="flex items-center gap-2 px-3 py-2 text-[#787B86] hover:text-white hover:bg-[#2A2E39] rounded-lg transition-all text-sm font-medium">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                </svg>
                Alert
            </button>

            <button className="flex items-center gap-2 px-3 py-2 text-[#787B86] hover:text-white hover:bg-[#2A2E39] rounded-lg transition-all text-sm font-medium">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
                </svg>
                Replay
            </button>

            <div className="flex-1"></div>

            {/* OHLC Data */}
            {lastCandle && (
                <div className="flex items-center gap-4 text-sm">
                    <span className="text-[#787B86]">O <span className="text-white font-mono font-medium">{lastCandle.open?.toFixed(5)}</span></span>
                    <span className="text-[#787B86]">H <span className="text-[#26a69a] font-mono font-medium">{lastCandle.high?.toFixed(5)}</span></span>
                    <span className="text-[#787B86]">L <span className="text-[#ef5350] font-mono font-medium">{lastCandle.low?.toFixed(5)}</span></span>
                    <span className="text-[#787B86]">C <span className="text-white font-mono font-medium">{lastCandle.close?.toFixed(5)}</span></span>
                </div>
            )}
        </div>
    );
};
