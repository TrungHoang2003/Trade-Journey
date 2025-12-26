export const ChartToolbar = () => {
    const tools = [
        { icon: '✜', label: 'Crosshair' },
        { icon: '📈', label: 'Trendline' },
        { icon: '▭', label: 'Rectangle' },
        { icon: '◯', label: 'Circle' },
        { icon: '✎', label: 'Text' },
        { icon: '🔍', label: 'Zoom' },
    ];

    return (
        <div className="bg-gradient-to-r from-[#1E222D] to-[#1A1E2D] border-b border-[#2A2E39] px-4 py-2.5 flex items-center gap-2 shadow-md">
            {tools.map((tool, idx) => (
                <button
                    key={idx}
                    className="p-2.5 text-gray-400 hover:text-white hover:bg-[#2A2E39] rounded-lg transition-all text-base hover:shadow-md group"
                    title={tool.label}
                >
                    <span className="group-hover:scale-110 inline-block transition-transform">{tool.icon}</span>
                </button>
            ))}
            
            <div className="w-px h-6 bg-[#363A45] mx-2"></div>
            
            {/* Additional Controls */}
            <button className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-lg transition-all hover:shadow-lg">
                ⚡ Replay
            </button>
            <button className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white hover:bg-[#2A2E39] rounded-lg transition-all hover:shadow-md">
                📸 Screenshot
            </button>
        </div>
    );
};
