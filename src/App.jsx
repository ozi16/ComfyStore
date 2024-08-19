import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {
  About, Cart, Checkout, Error,
  HomeLayout, Landing, Login, Orders,
  Products, Register, SingleProduct
} from "./pages"

// loader
import { loader as landingLoader } from './pages/Landing'
import { loader as singleProductLoader } from './pages/SingleProduct'
import { loader as productLoader } from './pages/Products'

// action
import { ErrorElement } from "./components"


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        ErrorElement: ErrorElement,
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products />,
        ErrorElement: ErrorElement,
        loader: productLoader,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        ErrorElement: ErrorElement,
        loader: singleProductLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
