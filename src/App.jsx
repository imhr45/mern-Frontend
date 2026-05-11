import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { InterviewProvider } from "./features/interview/interview.context.jsx"
import { useAuth } from "./features/auth/hooks/useAuth"
import useFaviconAnimation from "./useFaviconAnimation"
import { useEffect } from "react"

// ✅ Global Premium Loading Screen
function GlobalLoader() {
    const { loading } = useAuth()

    if (loading) {
        return (
            <main style={{
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#020617',
            }}>
                <style>{`
                    @keyframes spinRing { to { transform: rotate(360deg); } }
                    @keyframes rotateLogo { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    .r1 { position: absolute; width: 100px; height: 100px; border-radius: 50%; border: 2px solid transparent; border-top-color: #ec4899; animation: spinRing 1.2s linear infinite; }
                    .r2 { position: absolute; width: 76px; height: 76px; border-radius: 50%; border: 2px solid transparent; border-top-color: #6366f1; border-right-color: #6366f1; animation: spinRing 0.9s linear infinite reverse; }
                    .r3 { position: absolute; width: 52px; height: 52px; border-radius: 50%; border: 2px solid transparent; border-top-color: rgba(236,72,153,0.4); animation: spinRing 1.6s linear infinite; }
                    .rlogo { animation: rotateLogo 4s linear infinite; }
                `}</style>

                <div style={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem'
                }}>
                    <div style={{
                        position: 'relative',
                        width: '100px',
                        height: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div className="r1"></div>
                        <div className="r2"></div>
                        <div className="r3"></div>
                        <svg className="rlogo" width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="#ec4899" strokeWidth="2"/>
                            <path d="M12 6v6l4 2" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>

                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>
                        Interview<span style={{ color: '#ec4899' }}>IQ</span>
                    </h2>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', marginTop: '-1rem' }}>
                        Initializing... ✨
                    </p>
                </div>
            </main>
        )
    }

    return <RouterProvider router={router} />
}

function App() {
    useFaviconAnimation()

    useEffect(() => {
        let toggle = false
        const interval = setInterval(() => {
            document.title = toggle
                ? "InterviewIQ"
                : "Interview🧠IQ"
            toggle = !toggle
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <AuthProvider>
            <InterviewProvider>
                <GlobalLoader />
            </InterviewProvider>
        </AuthProvider>
    )
}

export default App