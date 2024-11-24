import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { GenerateQuote } from './pages/GenerateQuote';
import { PresetValues } from './pages/PresetValues';
import { Catalog } from './pages/Catalog';
import { Quotes } from './pages/Quotes';
import { QuoteTemplate } from './pages/QuoteTemplate';
import { QuoteView } from './pages/QuoteView';
import { QuoteEdit } from './pages/QuoteEdit';
import { Login } from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="generate-quote" element={<GenerateQuote />} />
          <Route path="preset-values" element={<PresetValues />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="quotes/:id/view" element={<QuoteView />} />
          <Route path="quotes/:id/edit" element={<QuoteEdit />} />
          <Route path="quote-template" element={<QuoteTemplate />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;