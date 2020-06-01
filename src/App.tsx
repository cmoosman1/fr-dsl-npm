import React from 'react';
import { ThemeProvider } from 'styled-components';
import { PrimaryButton, SecondaryButton, CrossSellButton } from './components/Buttons';
import { TextField } from './components/TextInput';
import { GlobalStyle, farmersTheme } from './utils';


function App() {

  return (
    <ThemeProvider theme={farmersTheme}>
      <div className="App">
        <div>
          <PrimaryButton>Test</PrimaryButton>
        </div>
        <div>
          <SecondaryButton>Button</SecondaryButton>
        </div>
        <div>
          <CrossSellButton>Test</CrossSellButton>
        </div>
        <div>
          <TextField placeholder={'User Name'} />
        </div>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
