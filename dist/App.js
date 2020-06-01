import React from 'react';
import { ThemeProvider } from 'styled-components';
import { PrimaryButton, SecondaryButton, CrossSellButton } from './components/Buttons';
import { TextField } from './components/TextInput';
import { GlobalStyle, farmersTheme } from './utils';
function App() {
    return (React.createElement(ThemeProvider, { theme: farmersTheme },
        React.createElement("div", { className: "App" },
            React.createElement("div", null,
                React.createElement(PrimaryButton, null, "Test")),
            React.createElement("div", null,
                React.createElement(SecondaryButton, null, "Button")),
            React.createElement("div", null,
                React.createElement(CrossSellButton, null, "Test")),
            React.createElement("div", null,
                React.createElement(TextField, { placeholder: 'User Name' }))),
        React.createElement(GlobalStyle, null)));
}
export default App;
