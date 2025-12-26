export const mapToCharData = (dotnetCandle) => ({
    time: new Date(dotnetCandle.time).getTime() / 1000,
    open: dotnetCandle.open,
    high: dotnetCandle.high,
    low: dotnetCandle.low,
    close: dotnetCandle.close
})