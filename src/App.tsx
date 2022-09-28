import "./assets/styles/main.scss"
import PrivateRoutes from "./routes/PrivateRoutes"

function App() {
  return (
    <div className='h-screen container bg-slate-900'>
      <PrivateRoutes />
    </div>
  )
}

export default App
