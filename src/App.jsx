import { BrowserRouter } from "react-router"
import AppRoutes from "./pages/AppRoutes"

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
