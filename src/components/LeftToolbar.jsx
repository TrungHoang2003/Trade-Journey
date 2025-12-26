export const LeftToolbar = () => {
    const tools = [
        { 
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
            ), 
            label: 'Crosshair',
            active: true 
        },
        { 
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                    <path d="M4 20L20 4" strokeWidth="2"/>
                </svg>
            ), 
            label: 'Trendline' 
        },
        { 
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                    <path d="M4 16L10 10L14 14L20 8" strokeWidth="2"/>
                </svg>
            ), 
            label: 'Ray' 
        },
        { 
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                    <rect x="4" y="4" width="16" height="16" rx="1" strokeWidth="2"/>
                </svg>
            ), 
            label: 'Rectangle' 
        },
        { 
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                    <circle cx="12" cy="12" r="8" strokeWidth="2"/>
                </svg>
            ), 
            label: 'Circle' 
        },
        { 
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                    <path d="M4 4L12 20L14 14L20 12L4 4Z" strokeWidth="2"/>
                </svg>
            ), 
            label: 'Arrow' 
        },
        { 
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
            ), 
            label: 'Brush' 
        },
        { 
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M5 4v3h5.5v12h3V7H19V4H5z"/>
                </svg>
            ), 
            label: 'Text' 
        },
    ];

    return (
        <div className="w-12 bg-[#131722] border-r border-[#2A2E39] flex flex-col items-center py-2 gap-1">
            {tools.map((tool, idx) => (
                <button
                    key={idx}
                    className={`w-9 h-9 flex items-center justify-center rounded transition-all ${
                        tool.active 
                            ? 'bg-[#2962FF] text-white' 
                            : 'text-[#787B86] hover:text-white hover:bg-[#2A2E39]'
                    }`}
                    title={tool.label}
                >
                    {tool.icon}
                </button>
            ))}
            
            <div className="w-6 h-px bg-[#2A2E39] my-2"></div>
            
            {/* Zoom controls */}
            <button className="w-9 h-9 flex items-center justify-center text-[#787B86] hover:text-white hover:bg-[#2A2E39] rounded transition-all" title="Zoom In">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                    <circle cx="11" cy="11" r="7" strokeWidth="2"/>
                    <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" strokeWidth="2"/>
                </svg>
            </button>
            <button className="w-9 h-9 flex items-center justify-center text-[#787B86] hover:text-white hover:bg-[#2A2E39] rounded transition-all" title="Zoom Out">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                    <circle cx="11" cy="11" r="7" strokeWidth="2"/>
                    <path d="M21 21l-4.35-4.35M8 11h6" strokeWidth="2"/>
                </svg>
            </button>
        </div>
    );
};
