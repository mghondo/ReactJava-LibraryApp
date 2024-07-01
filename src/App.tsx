import React from 'react';

import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/HomePage/components/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/components/Carousel';
import { ReturnBook } from './layouts/HomePage/components/ReturnBook';
import { Heros } from './layouts/HomePage/components/Heroes';
import { LibraryServices } from './layouts/HomePage/components/LibraryServices';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';

export const App = () => {
  return (
      <div>
        <HomePage/>

      </div>
  );
}

