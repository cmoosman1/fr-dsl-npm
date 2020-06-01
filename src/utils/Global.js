import { createGlobalStyle } from 'styled-components';
import { primaryFont } from './typography';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle `
    ${normalize()}
    
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

    html{
        font-size: 16px;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin-top: 20px;
        font-family: ${primaryFont};
    }

    main {
        widt: 90%;
        margin: 0 auto;
    }

    #root {
        padding: 30px;
    }

    .App {
        alignItems: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justifyContent: space-around;
        width: 100%;

    }

    div{
        margin: 30px;
    }
`