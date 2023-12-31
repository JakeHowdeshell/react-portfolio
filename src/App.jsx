import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/UI/Footer';
import './App.css';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <header className="title"><h1>JakeHowdeshell</h1>
      <Nav />
      </header>
      <main className="mx-3">
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;