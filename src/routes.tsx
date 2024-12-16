import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './pages/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        {/* <Route element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route> */}
        {/* <Route path='concerts'>
          <Route index element={<ConcertsHome />} />
          <Route path=':city' element={<City />} />
          <Route path='trending' element={<Trending />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
