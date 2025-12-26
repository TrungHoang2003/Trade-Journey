const API_BASE_URL = 'http://localhost:5080/api';

export const candleService = {
    async getCandles(symbol = 'EURUSD', timeFrame = 'D1') {
        try {
            const response = await fetch(
                `${API_BASE_URL}/candle?symbol=${symbol}&timeFrame=${timeFrame}`
            );
            
            if (!response.ok) {
                throw new Error('Failed to fetch candles');
            }
            
            const data = await response.json();
            
            // Transform data to lightweight-charts format
            return data.map(candle => ({
                time: new Date(candle.timestamp).getTime() / 1000, // Convert to Unix timestamp in seconds
                open: candle.open,
                high: candle.high,
                low: candle.low,
                close: candle.close
            }));
        } catch (error) {
            console.error('Error fetching candles:', error);
            throw error;
        }
    },
    
    async uploadCandles(file, timeFrame = 'M1') {
        try {
            const formData = new FormData();
            formData.append('file', file);
            
            const response = await fetch(
                `${API_BASE_URL}/candle/upload?timeFrame=${timeFrame}`,
                {
                    method: 'POST',
                    body: formData
                }
            );
            
            if (!response.ok) {
                throw new Error('Failed to upload file');
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error uploading candles:', error);
            throw error;
        }
    }
};
