import { useDispatch, useSelector } from 'react-redux';
import User from '../../stores/userStore';
import Account from '../Account/Account';
import Admin from '../Admin/Admin';
import Home from '../Home/Home';
import ProductsPage from '../ProductsPage/ProductsPage';
import AppLayout from './AppLayout';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CartPage from '../CartPage/CartPage';
import { setUser } from '../../slices/userSlice';
import Checkout from '../Checkout/Checkout';
import SuccessPage from '../Checkout/SuccessPage/SuccessPage';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [userLoading, setUserLoading] = useState(true);

  const handleCheckAuthUser = async () => {
    try {
      const response = await User.checkAuthUser(localStorage.getItem('userToken'));
      if (response.status === 200) {
        dispatch(setUser({
          _id: response.data.sanitizedData._id,
          email: response.data.sanitizedData.email,
          cart: response.data.sanitizedData.cart,
          token: response.data.sanitizedData.token,
          firstName: response.data.sanitizedData.firstName,
          lastName: response.data.sanitizedData.lastName,
          phone: response.data.sanitizedData.phone,
          county: response.data.sanitizedData.county,
          city: response.data.sanitizedData.city,
          address: response.data.sanitizedData.address,
          zip: response.data.sanitizedData.zip
        }));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUserLoading(false);
    }
  }

  useEffect(() => {
    handleCheckAuthUser();
  }, []);

  let cartRoute, checkoutRoute;

  if (user) {
    cartRoute = (
      <>
        <Route path='/cart' element={<CartPage />} />
        {user.cart.length > 0 ? (
          <Route path='/checkout' element={<Checkout />} />
        ) : (
          <Route path='/checkout' element={<Navigate to='/products' />} />
        )}
        <Route path='/checkout/success' element={<SuccessPage />} />
      </>
    );

    checkoutRoute = (
      <Route path='/checkout' element={<Checkout />} />
    );
  } else {
    cartRoute = (
      <Route path='/cart' element={<Navigate to='/account/login' />} />
    );

    checkoutRoute = (
      <Route path='/checkout' element={<Navigate to='/account/login' />} />
    );
  }

  return (
    <AppLayout userLoading={userLoading}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/*' element={<ProductsPage />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/account/*' element={<Account />} />
        {cartRoute}
        {checkoutRoute}
      </Routes>
    </AppLayout>
  );
};

export default App;