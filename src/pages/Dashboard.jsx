import { useEffect, useState } from 'react';
import { ChartComponent } from '../components/ChartComponent';
import { candleService } from '../services/candleService';
import { MainHeader } from '../components/MainHeader';
import { LeftToolbar } from '../components/LeftToolbar';
import { TopToolbar } from '../components/TopToolbar';
import { RightPanel } from '../components/RightPanel';

export const Dashboard = () => {
    const [candles, setCandles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [symbol, setSymbol] = useState('EURUSD');
    const [timeFrame, setTimeFrame] = useState('D1');
    const [rightPanelOpen, setRightPanelOpen] = useState(true);
    
    useEffect(() => {
        loadCandles();
    }, [symbol, timeFrame]);
    
    const loadCandles = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await candleService.getCandles(symbol, timeFrame);
            setCandles(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Tốc độ replay phụ thuộc vào timeframe (ms)
    const getReplaySpeed = () => {
        switch (timeFrame) {
            case 'M1': return 100;    // 1 phút → nhanh nhất
            case 'M5': return 150;
            case 'M15': return 250;
            case 'M30': return 350;
            case 'H1': return 550;   // 1 giờ
            case 'H4': return 850;   // 4 giờ
            case 'D1': return 2000;  // 1 ngày → chậm nhất
            default: return 200;
        }
    };

    const lastCandle = candles.length > 0 ? candles[candles.length - 1] : null;

    return (
        <div className="h-screen flex flex-col bg-[#131722] text-white overflow-hidden">
            {/* Main Header */}
            <MainHeader />

            {/* Main Content */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Toolbar */}
                <LeftToolbar />

                {/* Chart Area */}
                <div className="flex-1 flex flex-col min-w-0">
                    {/* Top Toolbar with Symbol, Timeframe, OHLC */}
                    <TopToolbar 
                        symbol={symbol}
                        setSymbol={setSymbol}
                        timeFrame={timeFrame}
                        setTimeFrame={setTimeFrame}
                        lastCandle={lastCandle}
                    />

                    {/* Chart */}
                    <div className="flex-1 relative">
                        {loading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-[#131722] z-10">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-8 h-8 border-2 border-[#2962FF] border-t-transparent rounded-full animate-spin"></div>
                                    <span className="text-xs text-[#787B86]">Loading...</span>
                                </div>
                            </div>
                        )}
                        {error && (
                            <div className="absolute inset-0 flex items-center justify-center bg-[#131722]">
                                <div className="text-center">
                                    <p className="text-[#ef5350] text-sm mb-3">{error}</p>
                                    <button 
                                        onClick={loadCandles}
                                        className="px-4 py-2 bg-[#2962FF] text-white text-xs rounded hover:bg-[#1E53E4] transition-colors"
                                    >
                                        Retry
                                    </button>
                                </div>
                            </div>
                        )}
                        {!loading && !error && <ChartComponent candleData={candles} replaySpeed={getReplaySpeed()} />}
                    </div>
                </div>

                {/* Right Panel - Watchlist */}
                <RightPanel isOpen={rightPanelOpen} onToggle={() => setRightPanelOpen(!rightPanelOpen)} />
            </div>
        </div>
    );
};
