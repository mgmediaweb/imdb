import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import DetailScreen from './routes/Detail';
import HomeScreen from './routes/Home';
import { getCurrentMovies } from './redux/connection';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentMovies());
    // dispatch(getMissions());
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<DetailScreen />} path="/detail/:id" />
        <Route index element={<HomeScreen />} />
        <Route
          element={
            <section className="flex-center"><div className="container text-center">404 Page not found</div></section>
          }
          path="*"
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
