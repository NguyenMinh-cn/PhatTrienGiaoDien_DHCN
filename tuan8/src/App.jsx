import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePageLayout from './page/HomePageLayout';
import WhatToCookPage from './page/WhatToCookPage';
import RecipesPage from './page/RecipesPage';
import IngredientsPage from './page/IngredientsPage';
import OccasionsPage from './page/OccasionsPage';
import AboutUsPage from './page/AboutUsPage';
import Footer from './componets/Footer';
import Header from './componets/Header';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Router>
                <div className="flex flex-col justify-between">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePageLayout />} />
                        <Route
                            path="/what-to-cook"
                            element={<WhatToCookPage />}
                        />
                        <Route path="/recipes" element={<RecipesPage />} />
                        <Route
                            path="/ingredients"
                            element={<IngredientsPage />}
                        />
                        <Route path="/occasions" element={<OccasionsPage />} />
                        <Route path="/about-us" element={<AboutUsPage />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default App;
