import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
])
export default router
