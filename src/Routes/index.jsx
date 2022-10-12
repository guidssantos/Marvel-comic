import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { IndividualComic } from '../Pages/IndividualComic';
import { CartComic } from '../Pages/CartComic';
import { AllComics } from '../Pages/AllComics';
import { Purchase } from '../Pages/Purchase';

export function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/comic/:id' element={<IndividualComic />} />
      <Route path='comics/:id' element={<IndividualComic />} />
      <Route path='/comics' element={<AllComics />} />
      <Route path='/cart' element={<CartComic />} />
      <Route path='/purchase' element={<Purchase />} />
    </Routes>
  );
}
