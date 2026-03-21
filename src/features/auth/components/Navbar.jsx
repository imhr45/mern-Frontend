import React, { useState } from "react"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router"

const Navbar = () => {

    const { handleLogout, user } = useAuth()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const onLogout = async () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?")
        if (!confirmLogout) return

        await handleLogout()
        navigate("/login")
    }

    return (
        <div className="navbar">

            {/* LEFT */}
            <div className="logo-container">

                {/* 🔥 Rotating Logo */}
                <div className="logo-icon">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#ff2d78" strokeWidth="2"/>
                        <path d="M12 6v6l4 2" stroke="#ff2d78" strokeWidth="2"/>
                    </svg>
                </div>

                <h2 className="logo">
                    Interview<span>IQ</span>
                </h2>

            </div>

            {/* RIGHT */}
            <div className="user-menu">

                <div className="avatar" onClick={() => setOpen(!open)}>
                    {user?.email?.charAt(0).toUpperCase() || "U"}
                </div>

                {open && (
                    <div className="dropdown">
                        <p className="user-email">{user?.email}</p>

                        <button onClick={onLogout} className="logout-btn">
                            Logout
                        </button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbar