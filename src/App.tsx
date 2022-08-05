import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from './components/layouts/MainLayout';
import { Index } from './components/pages';
import './assets/styles/style.css';

// eslint-disable-next-line
export default function App() {
    return (
        <BrowserRouter>
            <MainLayout Content={ Index } />
        </BrowserRouter>
    );
}

