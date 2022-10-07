import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { IndividualComic } from '../Pages/IndividualComic';
import { CartComic } from '../Pages/CartComic';

export function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/comic' element={<IndividualComic />} />
      <Route path='/cart' element={<CartComic />} />
    </Routes>
  );
}
