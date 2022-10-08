import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { IndividualComic } from '../Pages/IndividualComic';
import { CartComic } from '../Pages/CartComic';
import { AllComics } from '../Pages/AllComics';

export function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/comic' element={<IndividualComic />} />
      <Route path='/comics' element={<AllComics />} />
      <Route path='/cart' element={<CartComic />} />
    </Routes>
  );
}
