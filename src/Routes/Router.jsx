import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
])
export default router
