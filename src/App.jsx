import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
