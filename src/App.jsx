import { Outlet } from "react-router"
import Header from "./components/Header"


function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main>
        <Outlet />
        <h1>ยินดีต้อนรับ</h1>
      </main>
      
    </div>
  )
}

export default App
