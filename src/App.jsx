import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AnimeBackdrop from './components/AnimeBackdrop';
import Nav from './components/Nav';
import PageTransition from './components/PageTransition';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import WorksPage from './components/WorksPage';
import ContactPage from './components/ContactPage';

function Shell() {
  return (
    <div className="scroll-smooth bg-black text-white selection:bg-cyan-400/30 selection:text-white">
      <AnimeBackdrop />
      <Nav />
      <main className="relative z-10">
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTransition>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
