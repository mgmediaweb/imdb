import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import DetailScreen from './routes/Detail';
import HomeScreen from './routes/Home';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/detail" element={<DetailScreen />} />
          <Route index element={<HomeScreen />} />
          <Route
            path="*"
            element={
              <section className="flex-center"><div className="container text-center">404 Page not found</div></section>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
