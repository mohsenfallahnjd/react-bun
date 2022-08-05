import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../modules/home/views/Home';

interface IndexProps {}

// eslint-disable-next-line require-jsdoc
export const Index: React.FC<IndexProps> = () => (
    <main>
        <Routes>
            <Route path="/" element={ <Home /> } />
        </Routes>
    </main>
);
