import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { InterviewProvider } from "./features/interview/interview.context.jsx"
import useFaviconAnimation from "./useFaviconAnimation"
import { useEffect } from "react"

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
        <RouterProvider router={router} />
      </InterviewProvider>
    </AuthProvider>
  )
}

export default App