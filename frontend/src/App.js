import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/general/Header';
import Footer from './components/general/Footer';
import HomeScreen from './components/weather/home';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-5'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />     
    </Router>
  );
}

export default App;
