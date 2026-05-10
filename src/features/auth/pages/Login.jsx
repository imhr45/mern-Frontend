import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Login = () => {
    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPass, setShowPass] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({ email, password })
        navigate('/')
    }

    if (loading) {
        return (
            <main className="auth-main">
                <div className="auth-loading">
                    <div className="auth-spinner"></div>
                    <p>Signing you in...</p>
                </div>
            </main>
        )
    }

    return (
        <main className="auth-main">
            <div className="auth-bg-orb orb-1"></div>
            <div className="auth-bg-orb orb-2"></div>
            <div className="auth-bg-grid"></div>

            <div className="auth-card">
                <div className="auth-card-glow"></div>
                <div className="auth-badge">SECURE LOGIN</div>

                {/* ✅ CHANGE 1 — Rotating SVG Logo */}
                <div className="auth-logo">
                    <div className="auth-logo-icon">
                        <svg
                            className="auth-logo-rotate"
                            width="22" height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/>
                            <path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <span className="auth-logo-text">Interview<span>IQ</span></span>
                </div>

                <h1 className="auth-title">Welcome back</h1>
                <p className="auth-subtitle">Sign in to continue your preparation</p>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="auth-field">
                        <label htmlFor="email">Email Address</label>
                        <div className="auth-input-wrap">
                            <svg className="auth-input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="auth-field">
                        <label htmlFor="password">Password</label>
                        <div className="auth-input-wrap">
                            <svg className="auth-input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                            </svg>
                            <input
                                id="password"
                                type={showPass ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="auth-eye"
                                onClick={() => setShowPass(!showPass)}
                            >
                                {showPass ? "🙈" : "👁"}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="auth-btn" disabled={loading}>
                        {loading ? "Signing in..." : "Sign In"}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                            <polyline points="12 5 19 12 12 19"/>
                        </svg>
                    </button>
                </form>

                {/* ✅ CHANGE 2 — "Sign Up" */}
                <p className="auth-footer">
                    Don't have an account?{' '}
                    <Link to="/register">Sign Up</Link>
                </p>
            </div>
        </main>
    )
}

export default Login