
import React from 'react';
import {createRoot} from 'react-dom/client'
import {App} from "./pages/App.tsx";

const main = document.getElementById('root') as HTMLElement;

const root = createRoot(main)

// Entry point of React
root.render(<App/>)