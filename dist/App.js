import React from 'react';
import { Button } from './components';
import './App.css';
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(Button, { primary: true }, "Test")));
}
export default App;
