import { Link } from 'react-router-dom';

export function Landing() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            <div style={{
                maxWidth: '800px',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '3rem',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}>
                <h1 style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    fontWeight: 'bold'
                }}>
                    Trade Journey
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    marginBottom: '2rem',
                    opacity: 0.9
                }}>
                    Your Professional Trading Journal & Analytics Platform
                </p>
                <p style={{
                    fontSize: '1rem',
                    marginBottom: '2rem',
                    lineHeight: '1.6'
                }}>
                    Track your trades, analyze performance with advanced charts powered by TradingView, 
                    and improve your trading strategy with data-driven insights.
                </p>
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <Link 
                        to="/login"
                        style={{
                            padding: '0.75rem 2rem',
                            background: 'white',
                            color: '#667eea',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1rem',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                            transition: 'transform 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        Login
                    </Link>
                    <Link 
                        to="/register"
                        style={{
                            padding: '0.75rem 2rem',
                            background: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            border: '2px solid white',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1rem',
                            transition: 'transform 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        Get Started
                    </Link>
                </div>
                <div style={{
                    marginTop: '3rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Features</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1rem',
                        textAlign: 'left'
                    }}>
                        <div>
                            <strong>📊 Advanced Charts</strong>
                            <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: '0.5rem 0 0 0' }}>
                                TradingView integration
                            </p>
                        </div>
                        <div>
                            <strong>📈 Trade Tracking</strong>
                            <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: '0.5rem 0 0 0' }}>
                                Complete trade history
                            </p>
                        </div>
                        <div>
                            <strong>🎯 Analytics</strong>
                            <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: '0.5rem 0 0 0' }}>
                                Performance insights
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
