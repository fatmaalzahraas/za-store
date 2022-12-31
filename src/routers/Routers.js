import {createBrowserRouter} from 'react-router-dom';
import RootLayout from '../pages/RootLayout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';
import Signup from '../pages/Signup';
import ErrorPage from '../pages/ErrorPage';
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <Home />},
            {path: 'shop', element: <Shop />},
            {path: 'shop/:id', element: <ProductDetails />},
            {path: 'cart', element: <Cart />},
            {path: 'checkOut', element: <Checkout />},
            {path: 'login', element: <Login />},
            {path: 'signup', element: <Signup />}
        ]
    },
]);

export default router;