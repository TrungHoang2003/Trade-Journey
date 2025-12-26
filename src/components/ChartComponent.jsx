import { AreaSeries, CandlestickSeries, createChart } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';
import { candleService } from '../services/candleService';

export const ChartComponent = props => {
    const { candleData } = props;
    const chartContainerRef = useRef();
    
    // Sử dụng Refs để quản lý instance xuyên suốt vòng đời component
    const chartRef = useRef(null);
    const seriesRef = useRef(null);
    const areaSeriesRef = useRef(null);
    const intervalRef = useRef(null);
    const currentIndexRef = useRef(0);

    // 1. Khởi tạo biểu đồ và các Series (Chỉ chạy 1 lần duy nhất khi Mount)
    useEffect(() => {
        const handleResize = () => {
            if (chartRef.current && chartContainerRef.current) {
                chartRef.current.applyOptions({ width: chartContainerRef.current.clientWidth });
            }
        };

        // Cấu hình Layout và Grid giữ nguyên của bạn
        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: '#222',
                textColor: '#DDD',
            },
            grid: {
                vertLines: { color: '#44444440' },
                horzLines: { color: '#44444440' },
            },
        });

        // Cấu hình Price Scale (Trục giá)
        chart.priceScale('right').applyOptions({
            borderColor: '#71649C',
            autoScale: true,
            scaleMargins: {
                top: 0.1,
                bottom: 0.15,
            },
        });

        // Cấu hình Time Scale (Trục thời gian)
        chart.timeScale().applyOptions({
            borderColor: '#71649C',
            barSpacing: 10,
        });

        // Định dạng giá chuẩn Forex (5 số thập phân)
        const currentLocale = window.navigator.languages[0];
        const myPriceFormatter = Intl.NumberFormat(currentLocale, {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 5,
            maximumFractionDigits: 5,
        }).format;

        chart.applyOptions({
            localization: {
                priceFormatter: myPriceFormatter,
            },
            crosshair: {
                mode: 0,
                vertLine: {
                    color: '#C3BCDB44',
                    width: 6,
                    style: 0,
                    labelBackgroundColor: '#9B7DFF',
                },
                horzLine: {
                    color: '#9B7DFF',
                    labelBackgroundColor: '#9B7DFF',
                },
            },
        });

        // Khởi tạo Area Series (Bóng mờ phía dưới)
        const areaSeries = chart.addSeries(AreaSeries, {
            lastValueVisible: false,
            crosshairMarkerVisible: false,
            lineColor: 'transparent',
            topColor: 'rgba(56, 33, 110, 0.6)',
            bottomColor: 'rgba(56, 33, 110, 0.1)',
        });

        // Khởi tạo Candlestick Series (Nến)
        const candlestickSeries = chart.addSeries(CandlestickSeries, {
            wickUpColor: 'rgb(8,153,129)',
            upColor: 'rgb(8,153,129)',
            wickDownColor: 'rgb(242,54,69)',
            downColor: 'rgb(242,54,69)',
            borderVisible: false,
        });

        // Lưu instance vào refs
        chartRef.current = chart;
        seriesRef.current = candlestickSeries;
        areaSeriesRef.current = areaSeries;

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []); 

    // 2. Xử lý Logic Replay: 60% tĩnh và 40% động
    useEffect(() => {
        if (!candleData || candleData.length === 0 || !seriesRef.current) return;

        // Xóa interval cũ nếu có
        if (intervalRef.current) clearInterval(intervalRef.current);

        // --- CHIA DỮ LIỆU ---
        const splitIndex = Math.floor(candleData.length * 0.6); // Ngưỡng 60%
        const historyData = candleData.slice(0, splitIndex);
        const futureData = candleData.slice(splitIndex);

        // Hàm hỗ trợ format màu sắc nến
        const formatColor = (dp) => {
            if (dp.close < 1.47608) return dp;
            return { ...dp, color: 'orange', wickColor: 'orange', borderColor: 'orange' };
        };

        // --- BƯỚC 1: NẠP 60% DỮ LIỆU ĐẦU (TĨNH) ---
        const initialHistory = historyData.map(formatColor);
        seriesRef.current.setData(initialHistory);
        
        areaSeriesRef.current.setData(historyData.map(dp => ({
            time: dp.time,
            value: (dp.open + dp.close) / 2
        })));

        // Đưa khung nhìn về vị trí hiện tại
        chartRef.current.timeScale().scrollToRealTime();

        // --- BƯỚC 2: CHẠY 40% CÒN LẠI (REALTIME) ---
        let localIndex = 0;
        intervalRef.current = setInterval(() => {
            if (localIndex >= futureData.length) {
                clearInterval(intervalRef.current);
                return;
            }

            const currentPoint = futureData[localIndex];
            const formattedCandle = formatColor(currentPoint);

            // Cập nhật từng nến mượt mà
            seriesRef.current.update(formattedCandle);
            areaSeriesRef.current.update({
                time: currentPoint.time,
                value: (currentPoint.open + currentPoint.close) / 2,
            });

            localIndex++;
        }, 1000); // 100ms mỗi nến. Có thể chỉnh nhanh chậm tại đây. 👟

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [candleData]);

    return <div ref={chartContainerRef} className="w-full h-full" />;
}

// Component App (Xử lý dữ liệu nến)
export function App() {
    const [chartData, setChartData] = React.useState([]);

    React.useEffect(() => {
        candleService.getCandles().then(candles => {
            setChartData(candles);
        });
    }, []);

    if (chartData.length === 0) return <div>Loading...</div>;

    return <ChartComponent candleData={chartData} />;
}